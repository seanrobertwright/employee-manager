import {Entity, model, property} from '@loopback/repository';

@model()
export class Unit extends Entity {
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
  body: string;


  constructor(data?: Partial<Unit>) {
    super(data);
  }
}

export interface UnitRelations {
  // describe navigational properties here
}

export type UnitWithRelations = Unit & UnitRelations;
