import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ShitsDataSource} from '../datasources';
import {Sbu, SbuRelations} from '../models';

export class SbuRepository extends DefaultCrudRepository<
  Sbu,
  typeof Sbu.prototype.id,
  SbuRelations
> {
  constructor(
    @inject('datasources.shits') dataSource: ShitsDataSource,
  ) {
    super(Sbu, dataSource);
  }
}
