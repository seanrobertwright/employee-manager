import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mysql: {schema: 'shits', table: 'masterdata'}}})
export class Masterdata extends Entity {
  @property({
    type: 'string',
    length: 30,
    mysql: {columnName: 'Last_name_First_name', dataType: 'varchar', dataLength: 30, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  lastNameFirstName?: string;

  @property({
    type: 'string',
    length: 13,
    mysql: {columnName: 'lastName', dataType: 'varchar', dataLength: 13, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  lastName?: string;

  @property({
    type: 'string',
    length: 11,
    mysql: {columnName: 'firstName', dataType: 'varchar', dataLength: 11, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  firstName?: string;

  @property({
    type: 'string',
    length: 10,
    mysql: {columnName: 'middleName', dataType: 'varchar', dataLength: 10, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  middleName?: string;

  @property({
    type: 'string',
    length: 10,
    mysql: {columnName: 'Employee_Type', dataType: 'varchar', dataLength: 10, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  employeeType?: string;

  @property({
    type: 'string',
    length: 29,
    mysql: {columnName: 'Personnel_area_text', dataType: 'varchar', dataLength: 29, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  personnelAreaText?: string;

  @property({
    type: 'string',
    length: 4,
    mysql: {columnName: 'PSA_Location', dataType: 'varchar', dataLength: 4, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  psaLocation?: string;

  @property({
    type: 'string',
    length: 4,
    mysql: {columnName: 'PA', dataType: 'varchar', dataLength: 4, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  pa?: string;

  @property({
    type: 'string',
    length: 6,
    mysql: {columnName: 'Status', dataType: 'varchar', dataLength: 6, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  status?: string;

  @property({
    type: 'string',
    length: 14,
    mysql: {columnName: 'Name_of_EG', dataType: 'varchar', dataLength: 14, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  nameOfEg?: string;

  @property({
    type: 'string',
    length: 3,
    mysql: {columnName: 'Business_Code', dataType: 'varchar', dataLength: 3, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  businessCode?: string;

  @property({
    type: 'string',
    length: 19,
    mysql: {columnName: 'HR_Administrator', dataType: 'varchar', dataLength: 19, dataPrecision: null, dataScale: null, nullable: 'Y'},
  })
  hrAdministrator?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Masterdata>) {
    super(data);
  }
}

export interface MasterdataRelations {
  // describe navigational properties here
}

export type MasterdataWithRelations = Masterdata & MasterdataRelations;
