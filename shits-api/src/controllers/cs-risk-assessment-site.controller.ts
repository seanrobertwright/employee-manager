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
  Site,
} from '../models';
import {CsRiskAssessmentRepository} from '../repositories';

export class CsRiskAssessmentSiteController {
  constructor(
    @repository(CsRiskAssessmentRepository) protected csRiskAssessmentRepository: CsRiskAssessmentRepository,
  ) { }

  @get('/cs-risk-assessments/{id}/site', {
    responses: {
      '200': {
        description: 'CsRiskAssessment has one Site',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Site),
          },
        },
      },
    },
  })
  async get(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Site>,
  ): Promise<Site> {
    return this.csRiskAssessmentRepository.site(id).get(filter);
  }

  @post('/cs-risk-assessments/{id}/site', {
    responses: {
      '200': {
        description: 'CsRiskAssessment model instance',
        content: {'application/json': {schema: getModelSchemaRef(Site)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof CsRiskAssessment.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Site, {
            title: 'NewSiteInCsRiskAssessment',
            exclude: ['id'],
            optional: ['csRiskAssessmentId']
          }),
        },
      },
    }) site: Omit<Site, 'id'>,
  ): Promise<Site> {
    return this.csRiskAssessmentRepository.site(id).create(site);
  }

  @patch('/cs-risk-assessments/{id}/site', {
    responses: {
      '200': {
        description: 'CsRiskAssessment.Site PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Site, {partial: true}),
        },
      },
    })
    site: Partial<Site>,
    @param.query.object('where', getWhereSchemaFor(Site)) where?: Where<Site>,
  ): Promise<Count> {
    return this.csRiskAssessmentRepository.site(id).patch(site, where);
  }

  @del('/cs-risk-assessments/{id}/site', {
    responses: {
      '200': {
        description: 'CsRiskAssessment.Site DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Site)) where?: Where<Site>,
  ): Promise<Count> {
    return this.csRiskAssessmentRepository.site(id).delete(where);
  }
}
