import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory, HasOneRepositoryFactory} from '@loopback/repository';
import {ShitsDataSource} from '../datasources';
import {CsRiskAssessment, CsRiskAssessmentRelations, Employee, ChemState, Site, HazardousChemical} from '../models';
import {EmployeeRepository} from './employee.repository';
import {ChemStateRepository} from './chem-state.repository';
import {SiteRepository} from './site.repository';
import {HazardousChemicalRepository} from './hazardous-chemical.repository';

export class CsRiskAssessmentRepository extends DefaultCrudRepository<
  CsRiskAssessment,
  typeof CsRiskAssessment.prototype.id,
  CsRiskAssessmentRelations
> {

  public readonly employees: HasManyRepositoryFactory<Employee, typeof CsRiskAssessment.prototype.id>;

  public readonly chemState: HasOneRepositoryFactory<ChemState, typeof CsRiskAssessment.prototype.id>;

  public readonly site: HasOneRepositoryFactory<Site, typeof CsRiskAssessment.prototype.id>;

  public readonly hazardousChemicals: HasManyRepositoryFactory<HazardousChemical, typeof CsRiskAssessment.prototype.id>;

  constructor(
    @inject('datasources.shits') dataSource: ShitsDataSource, @repository.getter('EmployeeRepository') protected employeeRepositoryGetter: Getter<EmployeeRepository>, @repository.getter('ChemStateRepository') protected chemStateRepositoryGetter: Getter<ChemStateRepository>, @repository.getter('SiteRepository') protected siteRepositoryGetter: Getter<SiteRepository>, @repository.getter('HazardousChemicalRepository') protected hazardousChemicalRepositoryGetter: Getter<HazardousChemicalRepository>,
  ) {
    super(CsRiskAssessment, dataSource);
    this.hazardousChemicals = this.createHasManyRepositoryFactoryFor('hazardousChemicals', hazardousChemicalRepositoryGetter,);
    this.registerInclusionResolver('hazardousChemicals', this.hazardousChemicals.inclusionResolver);
    this.site = this.createHasOneRepositoryFactoryFor('site', siteRepositoryGetter);
    this.registerInclusionResolver('site', this.site.inclusionResolver);
    this.chemState = this.createHasOneRepositoryFactoryFor('chemState', chemStateRepositoryGetter);
    this.registerInclusionResolver('chemState', this.chemState.inclusionResolver);
    this.employees = this.createHasManyRepositoryFactoryFor('employees', employeeRepositoryGetter,);
    this.registerInclusionResolver('employees', this.employees.inclusionResolver);
  }
}
