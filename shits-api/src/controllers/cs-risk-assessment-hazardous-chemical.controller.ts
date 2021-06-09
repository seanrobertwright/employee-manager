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
  HazardousChemical,
} from '../models';
import {CsRiskAssessmentRepository} from '../repositories';

export class CsRiskAssessmentHazardousChemicalController {
  constructor(
    @repository(CsRiskAssessmentRepository) protected csRiskAssessmentRepository: CsRiskAssessmentRepository,
  ) { }

  @get('/cs-risk-assessments/{id}/hazardous-chemicals', {
    responses: {
      '200': {
        description: 'Array of CsRiskAssessment has many HazardousChemical',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(HazardousChemical)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<HazardousChemical>,
  ): Promise<HazardousChemical[]> {
    return this.csRiskAssessmentRepository.hazardousChemicals(id).find(filter);
  }

  @post('/cs-risk-assessments/{id}/hazardous-chemicals', {
    responses: {
      '200': {
        description: 'CsRiskAssessment model instance',
        content: {'application/json': {schema: getModelSchemaRef(HazardousChemical)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof CsRiskAssessment.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(HazardousChemical, {
            title: 'NewHazardousChemicalInCsRiskAssessment',
            exclude: ['id'],
            optional: ['csRiskAssessmentId']
          }),
        },
      },
    }) hazardousChemical: Omit<HazardousChemical, 'id'>,
  ): Promise<HazardousChemical> {
    return this.csRiskAssessmentRepository.hazardousChemicals(id).create(hazardousChemical);
  }

  @patch('/cs-risk-assessments/{id}/hazardous-chemicals', {
    responses: {
      '200': {
        description: 'CsRiskAssessment.HazardousChemical PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(HazardousChemical, {partial: true}),
        },
      },
    })
    hazardousChemical: Partial<HazardousChemical>,
    @param.query.object('where', getWhereSchemaFor(HazardousChemical)) where?: Where<HazardousChemical>,
  ): Promise<Count> {
    return this.csRiskAssessmentRepository.hazardousChemicals(id).patch(hazardousChemical, where);
  }

  @del('/cs-risk-assessments/{id}/hazardous-chemicals', {
    responses: {
      '200': {
        description: 'CsRiskAssessment.HazardousChemical DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(HazardousChemical)) where?: Where<HazardousChemical>,
  ): Promise<Count> {
    return this.csRiskAssessmentRepository.hazardousChemicals(id).delete(where);
  }
}
