import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ShitsDataSource} from '../datasources';
import {EmployeeType, EmployeeTypeRelations} from '../models';

export class EmployeeTypeRepository extends DefaultCrudRepository<
  EmployeeType,
  typeof EmployeeType.prototype.id,
  EmployeeTypeRelations
> {
  constructor(
    @inject('datasources.shits') dataSource: ShitsDataSource,
  ) {
    super(EmployeeType, dataSource);
  }
}
