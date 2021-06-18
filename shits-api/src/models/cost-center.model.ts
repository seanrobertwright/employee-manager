import {Entity, model, property, hasOne} from '@loopback/repository';
import {Employee} from './employee.model';

@model()
export class CostCenter extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  costCenterNumber: string;

  @property({
    type: 'number',
  })
  employeeId?: number;

  constructor(data?: Partial<CostCenter>) {
    super(data);
  }
}

export interface CostCenterRelations {
  // describe navigational properties here
}

export type CostCenterWithRelations = CostCenter & CostCenterRelations;
