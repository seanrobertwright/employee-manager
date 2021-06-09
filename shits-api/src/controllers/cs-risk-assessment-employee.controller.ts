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
  Employee,
} from '../models';
import {CsRiskAssessmentRepository} from '../repositories';

export class CsRiskAssessmentEmployeeController {
  constructor(
    @repository(CsRiskAssessmentRepository) protected csRiskAssessmentRepository: CsRiskAssessmentRepository,
  ) { }

  @get('/cs-risk-assessments/{id}/employees', {
    responses: {
      '200': {
        description: 'Array of CsRiskAssessment has many Employee',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Employee)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Employee>,
  ): Promise<Employee[]> {
    return this.csRiskAssessmentRepository.employees(id).find(filter);
  }

  @post('/cs-risk-assessments/{id}/employees', {
    responses: {
      '200': {
        description: 'CsRiskAssessment model instance',
        content: {'application/json': {schema: getModelSchemaRef(Employee)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof CsRiskAssessment.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Employee, {
            title: 'NewEmployeeInCsRiskAssessment',
            exclude: ['id'],
            optional: ['participant']
          }),
        },
      },
    }) employee: Omit<Employee, 'id'>,
  ): Promise<Employee> {
    return this.csRiskAssessmentRepository.employees(id).create(employee);
  }

  @patch('/cs-risk-assessments/{id}/employees', {
    responses: {
      '200': {
        description: 'CsRiskAssessment.Employee PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Employee, {partial: true}),
        },
      },
    })
    employee: Partial<Employee>,
    @param.query.object('where', getWhereSchemaFor(Employee)) where?: Where<Employee>,
  ): Promise<Count> {
    return this.csRiskAssessmentRepository.employees(id).patch(employee, where);
  }

  @del('/cs-risk-assessments/{id}/employees', {
    responses: {
      '200': {
        description: 'CsRiskAssessment.Employee DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Employee)) where?: Where<Employee>,
  ): Promise<Count> {
    return this.csRiskAssessmentRepository.employees(id).delete(where);
  }
}
