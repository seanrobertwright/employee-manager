import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {ShitsDataSource} from '../datasources';
import {Employee, EmployeeRelations, CostCenter} from '../models';
import {CostCenterRepository} from './cost-center.repository';

export class EmployeeRepository extends DefaultCrudRepository<
  Employee,
  typeof Employee.prototype.id,
  EmployeeRelations
> {

  public readonly costCenter: HasOneRepositoryFactory<CostCenter, typeof Employee.prototype.id>;

  constructor(
    @inject('datasources.shits') dataSource: ShitsDataSource, @repository.getter('CostCenterRepository') protected costCenterRepositoryGetter: Getter<CostCenterRepository>,
  ) {
    super(Employee, dataSource);
    this.costCenter = this.createHasOneRepositoryFactoryFor('costCenter', costCenterRepositoryGetter);
    this.registerInclusionResolver('costCenter', this.costCenter.inclusionResolver);
  }
}
