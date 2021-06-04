import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {ShitsDataSource} from '../datasources';
import {Employee, EmployeeRelations, Site} from '../models';
import {SiteRepository} from './site.repository';

export class EmployeeRepository extends DefaultCrudRepository<
  Employee,
  typeof Employee.prototype.id,
  EmployeeRelations
> {

  public readonly site: HasOneRepositoryFactory<Site, typeof Employee.prototype.id>;

  constructor(
    @inject('datasources.shits') dataSource: ShitsDataSource, @repository.getter('SiteRepository') protected siteRepositoryGetter: Getter<SiteRepository>,
  ) {
    super(Employee, dataSource);
    this.site = this.createHasOneRepositoryFactoryFor('site', siteRepositoryGetter);
    this.registerInclusionResolver('site', this.site.inclusionResolver);
  }
}
