import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ShitsDataSource} from '../datasources';
import {CostCenter, CostCenterRelations} from '../models';

export class CostCenterRepository extends DefaultCrudRepository<
  CostCenter,
  typeof CostCenter.prototype.id,
  CostCenterRelations
> {
  constructor(
    @inject('datasources.shits') dataSource: ShitsDataSource,
  ) {
    super(CostCenter, dataSource);
  }
}
