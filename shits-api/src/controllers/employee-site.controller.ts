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
  Site,
} from '../models';
import {EmployeeRepository} from '../repositories';

export class EmployeeSiteController {
  constructor(
    @repository(EmployeeRepository) protected employeeRepository: EmployeeRepository,
  ) { }

  @get('/employees/{id}/site', {
    responses: {
      '200': {
        description: 'Employee has one Site',
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
    return this.employeeRepository.site(id).get(filter);
  }

  @post('/employees/{id}/site', {
    responses: {
      '200': {
        description: 'Employee model instance',
        content: {'application/json': {schema: getModelSchemaRef(Site)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Employee.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Site, {
            title: 'NewSiteInEmployee',
            exclude: ['id'],
            optional: ['employeeId']
          }),
        },
      },
    }) site: Omit<Site, 'id'>,
  ): Promise<Site> {
    return this.employeeRepository.site(id).create(site);
  }

  @patch('/employees/{id}/site', {
    responses: {
      '200': {
        description: 'Employee.Site PATCH success count',
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
    return this.employeeRepository.site(id).patch(site, where);
  }

  @del('/employees/{id}/site', {
    responses: {
      '200': {
        description: 'Employee.Site DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Site)) where?: Where<Site>,
  ): Promise<Count> {
    return this.employeeRepository.site(id).delete(where);
  }
}
