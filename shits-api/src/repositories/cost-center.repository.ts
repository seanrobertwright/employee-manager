import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {ShitsDataSource} from '../datasources';
import {CostCenter, CostCenterRelations, Employee} from '../models';
import {EmployeeRepository} from './employee.repository';

export class CostCenterRepository extends DefaultCrudRepository<
  CostCenter,
  typeof CostCenter.prototype.id,
  CostCenterRelations
> {

  public readonly employee: HasOneRepositoryFactory<Employee, typeof CostCenter.prototype.id>;

  constructor(
    @inject('datasources.shits') dataSource: ShitsDataSource, @repository.getter('EmployeeRepository') protected employeeRepositoryGetter: Getter<EmployeeRepository>,
  ) {
    super(CostCenter, dataSource);
    this.employee = this.createHasOneRepositoryFactoryFor('employee', employeeRepositoryGetter);
    this.registerInclusionResolver('employee', this.employee.inclusionResolver);
  }
}
