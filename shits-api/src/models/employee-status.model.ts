import {Entity, model, property} from '@loopback/repository';

@model()
export class EmployeeStatus extends Entity {
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
  employeeStatus: string;


  constructor(data?: Partial<EmployeeStatus>) {
    super(data);
  }
}

export interface EmployeeStatusRelations {
  // describe navigational properties here
}

export type EmployeeStatusWithRelations = EmployeeStatus & EmployeeStatusRelations;
