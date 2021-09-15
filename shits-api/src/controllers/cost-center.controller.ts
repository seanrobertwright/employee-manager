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

export class CostCenterController {
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
            exclude: ['id'],
          }),
        },
      },
    })
    @param.filter(CostCenter) filter?: Filter<CostCenter>,

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
