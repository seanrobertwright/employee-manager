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
import {CostCenter} from '../models';
import {CostCenterRepository} from '../repositories';

export class CostcenterController {
  constructor(
    @repository(CostCenterRepository)
    public costCenterRepository : CostCenterRepository,
  ) {}

  @post('/cost-centers')
  @response(200, {
    description: 'CostCenter model instance',
    content: {'application/json': {schema: getModelSchemaRef(CostCenter)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CostCenter, {
            title: 'NewCostCenter',
            
          }),
        },
      },
    })
    costCenter: CostCenter,
  ): Promise<CostCenter> {
    return this.costCenterRepository.create(costCenter);
  }

  @get('/cost-centers/count')
  @response(200, {
    description: 'CostCenter model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(CostCenter) where?: Where<CostCenter>,
  ): Promise<Count> {
    return this.costCenterRepository.count(where);
  }

  @get('/cost-centers')
  @response(200, {
    description: 'Array of CostCenter model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(CostCenter, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(CostCenter) filter?: Filter<CostCenter>,
  ): Promise<CostCenter[]> {
    return this.costCenterRepository.find(filter);
  }

  @patch('/cost-centers')
  @response(200, {
    description: 'CostCenter PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CostCenter, {partial: true}),
        },
      },
    })
    costCenter: CostCenter,
    @param.where(CostCenter) where?: Where<CostCenter>,
  ): Promise<Count> {
    return this.costCenterRepository.updateAll(costCenter, where);
  }

  @get('/cost-centers/{id}')
  @response(200, {
    description: 'CostCenter model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(CostCenter, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(CostCenter, {exclude: 'where'}) filter?: FilterExcludingWhere<CostCenter>
  ): Promise<CostCenter> {
    return this.costCenterRepository.findById(id, filter);
  }

  @patch('/cost-centers/{id}')
  @response(204, {
    description: 'CostCenter PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CostCenter, {partial: true}),
        },
      },
    })
    costCenter: CostCenter,
  ): Promise<void> {
    await this.costCenterRepository.updateById(id, costCenter);
  }

  @put('/cost-centers/{id}')
  @response(204, {
    description: 'CostCenter PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() costCenter: CostCenter,
  ): Promise<void> {
    await this.costCenterRepository.replaceById(id, costCenter);
  }

  @del('/cost-centers/{id}')
  @response(204, {
    description: 'CostCenter DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.costCenterRepository.deleteById(id);
  }
}
