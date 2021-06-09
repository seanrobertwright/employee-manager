import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  CsRiskAssessment,
  ChemState,
} from '../models';
import {CsRiskAssessmentRepository} from '../repositories';

export class CsRiskAssessmentChemStateController {
  constructor(
    @repository(CsRiskAssessmentRepository) protected csRiskAssessmentRepository: CsRiskAssessmentRepository,
  ) { }

  @get('/cs-risk-assessments/{id}/chem-state', {
    responses: {
      '200': {
        description: 'CsRiskAssessment has one ChemState',
        content: {
          'application/json': {
            schema: getModelSchemaRef(ChemState),
          },
        },
      },
    },
  })
  async get(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<ChemState>,
  ): Promise<ChemState> {
    return this.csRiskAssessmentRepository.chemState(id).get(filter);
  }

  @post('/cs-risk-assessments/{id}/chem-state', {
    responses: {
      '200': {
        description: 'CsRiskAssessment model instance',
        content: {'application/json': {schema: getModelSchemaRef(ChemState)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof CsRiskAssessment.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ChemState, {
            title: 'NewChemStateInCsRiskAssessment',
            exclude: ['id'],
            optional: ['chemState']
          }),
        },
      },
    }) chemState: Omit<ChemState, 'id'>,
  ): Promise<ChemState> {
    return this.csRiskAssessmentRepository.chemState(id).create(chemState);
  }

  @patch('/cs-risk-assessments/{id}/chem-state', {
    responses: {
      '200': {
        description: 'CsRiskAssessment.ChemState PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ChemState, {partial: true}),
        },
      },
    })
    chemState: Partial<ChemState>,
    @param.query.object('where', getWhereSchemaFor(ChemState)) where?: Where<ChemState>,
  ): Promise<Count> {
    return this.csRiskAssessmentRepository.chemState(id).patch(chemState, where);
  }

  @del('/cs-risk-assessments/{id}/chem-state', {
    responses: {
      '200': {
        description: 'CsRiskAssessment.ChemState DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(ChemState)) where?: Where<ChemState>,
  ): Promise<Count> {
    return this.csRiskAssessmentRepository.chemState(id).delete(where);
  }
}
