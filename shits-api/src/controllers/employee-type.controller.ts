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
import {EmployeeType} from '../models';
import {EmployeeTypeRepository} from '../repositories';

export class EmployeeTypeController {
  constructor(
    @repository(EmployeeTypeRepository)
    public employeeTypeRepository : EmployeeTypeRepository,
  ) {}

  @post('/employee-types')
  @response(200, {
    description: 'EmployeeType model instance',
    content: {'application/json': {schema: getModelSchemaRef(EmployeeType)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EmployeeType, {
            title: 'NewEmployeeType',
            exclude: ['id'],
          }),
        },
      },
    })
    employeeType: Omit<EmployeeType, 'id'>,
  ): Promise<EmployeeType> {
    return this.employeeTypeRepository.create(employeeType);
  }

  @get('/employee-types/count')
  @response(200, {
    description: 'EmployeeType model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(EmployeeType) where?: Where<EmployeeType>,
  ): Promise<Count> {
    return this.employeeTypeRepository.count(where);
  }

  @get('/employee-types')
  @response(200, {
    description: 'Array of EmployeeType model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(EmployeeType, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(EmployeeType) filter?: Filter<EmployeeType>,
  ): Promise<EmployeeType[]> {
    return this.employeeTypeRepository.find(filter);
  }

  @patch('/employee-types')
  @response(200, {
    description: 'EmployeeType PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EmployeeType, {partial: true}),
        },
      },
    })
    employeeType: EmployeeType,
    @param.where(EmployeeType) where?: Where<EmployeeType>,
  ): Promise<Count> {
    return this.employeeTypeRepository.updateAll(employeeType, where);
  }

  @get('/employee-types/{id}')
  @response(200, {
    description: 'EmployeeType model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(EmployeeType, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(EmployeeType, {exclude: 'where'}) filter?: FilterExcludingWhere<EmployeeType>
  ): Promise<EmployeeType> {
    return this.employeeTypeRepository.findById(id, filter);
  }

  @patch('/employee-types/{id}')
  @response(204, {
    description: 'EmployeeType PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EmployeeType, {partial: true}),
        },
      },
    })
    employeeType: EmployeeType,
  ): Promise<void> {
    await this.employeeTypeRepository.updateById(id, employeeType);
  }

  @put('/employee-types/{id}')
  @response(204, {
    description: 'EmployeeType PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() employeeType: EmployeeType,
  ): Promise<void> {
    await this.employeeTypeRepository.replaceById(id, employeeType);
  }

  @del('/employee-types/{id}')
  @response(204, {
    description: 'EmployeeType DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.employeeTypeRepository.deleteById(id);
  }
}
