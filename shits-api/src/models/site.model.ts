import {Entity, model, property} from '@loopback/repository';

@model()
export class Site extends Entity {
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
    type: 'string',
  })
  plantCode?: string;

  @property({
    type: 'number',
  })
  employeeId?: number;

  constructor(data?: Partial<Site>) {
    super(data);
  }
}

export interface SiteRelations {
  // describe navigational properties here
}

export type SiteWithRelations = Site & SiteRelations;
