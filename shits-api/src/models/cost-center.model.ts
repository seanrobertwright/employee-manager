import {Entity, model, property} from '@loopback/repository';

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
    type: 'string',
    required: true,
  })
  costCenterName: string;


  constructor(data?: Partial<CostCenter>) {
    super(data);
  }
}

export interface CostCenterRelations {
  // describe navigational properties here
}

export type CostCenterWithRelations = CostCenter & CostCenterRelations;
