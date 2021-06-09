import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ShitsDataSource} from '../datasources';
import {ChemState, ChemStateRelations} from '../models';

export class ChemStateRepository extends DefaultCrudRepository<
  ChemState,
  typeof ChemState.prototype.id,
  ChemStateRelations
> {
  constructor(
    @inject('datasources.shits') dataSource: ShitsDataSource,
  ) {
    super(ChemState, dataSource);
  }
}
