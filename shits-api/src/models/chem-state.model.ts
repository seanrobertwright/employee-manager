import {Entity, model, property} from '@loopback/repository';

@model()
export class ChemState extends Entity {
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

  @property({
    type: 'number',
  })
  chemState?: number;

  constructor(data?: Partial<ChemState>) {
    super(data);
  }
}

export interface ChemStateRelations {
  // describe navigational properties here
}

export type ChemStateWithRelations = ChemState & ChemStateRelations;
