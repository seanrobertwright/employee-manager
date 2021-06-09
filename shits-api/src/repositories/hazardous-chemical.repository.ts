import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ShitsDataSource} from '../datasources';
import {HazardousChemical, HazardousChemicalRelations} from '../models';

export class HazardousChemicalRepository extends DefaultCrudRepository<
  HazardousChemical,
  typeof HazardousChemical.prototype.id,
  HazardousChemicalRelations
> {
  constructor(
    @inject('datasources.shits') dataSource: ShitsDataSource,
  ) {
    super(HazardousChemical, dataSource);
  }
}
