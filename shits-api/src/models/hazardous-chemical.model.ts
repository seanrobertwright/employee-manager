import {Entity, model, property} from '@loopback/repository';

@model()
export class HazardousChemical extends Entity {
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
  name: string;

  @property({
    type: 'number',
    required: true,
  })
  quantity: number;

  @property({
    type: 'string',
    required: true,
  })
  toxicity: string;

  @property({
    type: 'string',
    required: true,
  })
  fireExplosion: string;

  @property({
    type: 'string',
    required: true,
  })
  reactivity: string;

  @property({
    type: 'string',
    required: true,
  })
  selfDecomp: string;

  @property({
    type: 'string',
    required: true,
  })
  incompatibility: string;

  @property({
    type: 'string',
    required: true,
  })
  storageReqs: string;

  @property({
    type: 'string',
    required: true,
  })
  fumes: string;

  @property({
    type: 'string',
    required: true,
  })
  waste: string;

  @property({
    type: 'number',
  })
  csRiskAssessmentId?: number;

  constructor(data?: Partial<HazardousChemical>) {
    super(data);
  }
}

export interface HazardousChemicalRelations {
  // describe navigational properties here
}

export type HazardousChemicalWithRelations = HazardousChemical & HazardousChemicalRelations;
