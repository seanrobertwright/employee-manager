import {Entity, model, property, hasMany, hasOne} from '@loopback/repository';
import {Employee} from './employee.model';
import {ChemState} from './chem-state.model';
import {Site} from './site.model';
import {HazardousChemical} from './hazardous-chemical.model';

@model()
export class CsRiskAssessment extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  processID: number;

  @hasMany(() => Employee, {keyTo: 'participant'})
  employees: Employee[];

  @hasOne(() => ChemState, {keyTo: 'chemState'})
  chemState: ChemState;

  @hasOne(() => Site)
  site: Site;

  @hasMany(() => HazardousChemical)
  hazardousChemicals: HazardousChemical[];

  constructor(data?: Partial<CsRiskAssessment>) {
    super(data);
  }
}

export interface CsRiskAssessmentRelations {
  // describe navigational properties here
}

export type CsRiskAssessmentWithRelations = CsRiskAssessment & CsRiskAssessmentRelations;
