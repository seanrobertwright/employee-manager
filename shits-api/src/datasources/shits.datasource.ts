import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'shits',
  connector: 'mysql',
  url: 'mysql://shits:Muadib70!!@localhost/shits',
  host: 'localhost',
  port: 3306,
  user: 'shits',
  password: 'Muadib70!!',
  database: 'shits'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class ShitsDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'shits';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.shits', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
