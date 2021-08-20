import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {EmployeeStatus} from '../models';
import {EmployeeStatusRepository} from '../repositories';

export class EmployeeStatusController {
  constructor(
    @repository(EmployeeStatusRepository)
    public employeeStatusRepository : EmployeeStatusRepository,
  ) {}

  @post('/employee-statuses')
  @response(200, {
    description: 'EmployeeStatus model instance',
    content: {'application/json': {schema: getModelSchemaRef(EmployeeStatus)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EmployeeStatus, {
            title: 'NewEmployeeStatus',
            
          }),
        },
      },
    })
    employeeStatus: EmployeeStatus,
  ): Promise<EmployeeStatus> {
    return this.employeeStatusRepository.create(employeeStatus);
  }

  @get('/employee-statuses/count')
  @response(200, {
    description: 'EmployeeStatus model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(EmployeeStatus) where?: Where<EmployeeStatus>,
  ): Promise<Count> {
    return this.employeeStatusRepository.count(where);
  }

  @get('/employee-statuses')
  @response(200, {
    description: 'Array of EmployeeStatus model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(EmployeeStatus, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(EmployeeStatus) filter?: Filter<EmployeeStatus>,
  ): Promise<EmployeeStatus[]> {
    return this.employeeStatusRepository.find(filter);
  }

  @patch('/employee-statuses')
  @response(200, {
    description: 'EmployeeStatus PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EmployeeStatus, {partial: true}),
        },
      },
    })
    employeeStatus: EmployeeStatus,
    @param.where(EmployeeStatus) where?: Where<EmployeeStatus>,
  ): Promise<Count> {
    return this.employeeStatusRepository.updateAll(employeeStatus, where);
  }

  @get('/employee-statuses/{id}')
  @response(200, {
    description: 'EmployeeStatus model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(EmployeeStatus, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(EmployeeStatus, {exclude: 'where'}) filter?: FilterExcludingWhere<EmployeeStatus>
  ): Promise<EmployeeStatus> {
    return this.employeeStatusRepository.findById(id, filter);
  }

  @patch('/employee-statuses/{id}')
  @response(204, {
    description: 'EmployeeStatus PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EmployeeStatus, {partial: true}),
        },
      },
    })
    employeeStatus: EmployeeStatus,
  ): Promise<void> {
    await this.employeeStatusRepository.updateById(id, employeeStatus);
  }

  @put('/employee-statuses/{id}')
  @response(204, {
    description: 'EmployeeStatus PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() employeeStatus: EmployeeStatus,
  ): Promise<void> {
    await this.employeeStatusRepository.replaceById(id, employeeStatus);
  }

  @del('/employee-statuses/{id}')
  @response(204, {
    description: 'EmployeeStatus DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.employeeStatusRepository.deleteById(id);
  }
}
