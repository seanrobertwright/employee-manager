import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ShitsDataSource} from '../datasources';
import {Site, SiteRelations} from '../models';

export class SiteRepository extends DefaultCrudRepository<
  Site,
  typeof Site.prototype.id,
  SiteRelations
> {
  constructor(
    @inject('datasources.shits') dataSource: ShitsDataSource,
  ) {
    super(Site, dataSource);
  }
}
