import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ShitsDataSource} from '../datasources';
import {Unit, UnitRelations} from '../models';

export class UnitRepository extends DefaultCrudRepository<
  Unit,
  typeof Unit.prototype.id,
  UnitRelations
> {
  constructor(
    @inject('datasources.shits') dataSource: ShitsDataSource,
  ) {
    super(Unit, dataSource);
  }
}
