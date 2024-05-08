import { DataSource } from 'typeorm';
import { User } from '../entities/user.entity';

export const TypeOrmPostgreUserEntityRepositoryProvider = [
  {
    provide: 'TYPE_ORM_POSTGRE_USER_ENTITY_REPOSITORY_PROVIDER',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: ['TYPE_ORM_POSTGRE_CONFIG_PROVIDER'],
  },
];
