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
  Employee,
  CostCenter,
} from '../models';
import {EmployeeRepository} from '../repositories';

export class EmployeeCostCenterController {
  constructor(
    @repository(EmployeeRepository) protected employeeRepository: EmployeeRepository,
  ) { }

  @get('/employees/{id}/cost-center', {
    responses: {
      '200': {
        description: 'Employee has one CostCenter',
        content: {
          'application/json': {
            schema: getModelSchemaRef(CostCenter),
          },
        },
      },
    },
  })
  async get(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<CostCenter>,
  ): Promise<CostCenter> {
    return this.employeeRepository.costCenter(id).get(filter);
  }

  @post('/employees/{id}/cost-center', {
    responses: {
      '200': {
        description: 'Employee model instance',
        content: {'application/json': {schema: getModelSchemaRef(CostCenter)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Employee.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CostCenter, {
            title: 'NewCostCenterInEmployee',
            exclude: ['id'],
            optional: ['employeeId']
          }),
        },
      },
    }) costCenter: Omit<CostCenter, 'id'>,
  ): Promise<CostCenter> {
    return this.employeeRepository.costCenter(id).create(costCenter);
  }

  @patch('/employees/{id}/cost-center', {
    responses: {
      '200': {
        description: 'Employee.CostCenter PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CostCenter, {partial: true}),
        },
      },
    })
    costCenter: Partial<CostCenter>,
    @param.query.object('where', getWhereSchemaFor(CostCenter)) where?: Where<CostCenter>,
  ): Promise<Count> {
    return this.employeeRepository.costCenter(id).patch(costCenter, where);
  }

  @del('/employees/{id}/cost-center', {
    responses: {
      '200': {
        description: 'Employee.CostCenter DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(CostCenter)) where?: Where<CostCenter>,
  ): Promise<Count> {
    return this.employeeRepository.costCenter(id).delete(where);
  }
}
