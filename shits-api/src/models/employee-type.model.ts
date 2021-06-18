import {Entity, model, property} from '@loopback/repository';

@model()
export class EmployeeType extends Entity {
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
  employeeType: string;


  constructor(data?: Partial<EmployeeType>) {
    super(data);
  }
}

export interface EmployeeTypeRelations {
  // describe navigational properties here
}

export type EmployeeTypeWithRelations = EmployeeType & EmployeeTypeRelations;
