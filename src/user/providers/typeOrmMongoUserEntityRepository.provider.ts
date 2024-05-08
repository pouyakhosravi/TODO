import { DataSource } from 'typeorm';
import { User } from '../entities/user.entity';

export const TypeOrmMongoUserEntityRepositoryProvider = [
  {
    provide: 'TYPE_ORM_MONGO_USER_ENTITY_REPOSITORY_PROVIDER',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: ['TYPE_ORM_MONGO_CONFIG_PROVIDER'],
  },
];
