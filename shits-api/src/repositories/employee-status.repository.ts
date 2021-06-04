import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ShitsDataSource} from '../datasources';
import {EmployeeStatus, EmployeeStatusRelations} from '../models';

export class EmployeeStatusRepository extends DefaultCrudRepository<
  EmployeeStatus,
  typeof EmployeeStatus.prototype.id,
  EmployeeStatusRelations
> {
  constructor(
    @inject('datasources.shits') dataSource: ShitsDataSource,
  ) {
    super(EmployeeStatus, dataSource);
  }
}
