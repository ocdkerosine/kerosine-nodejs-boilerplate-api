import { getOsEnvArray, getOsEnv } from '../../src/utils/env';
import { DBNamingStrategy } from '../../src/database/configuration/NamingStrategy';
import env from '../../src/env';

export = [
  {
    name: 'auth',
    url: env.db.auth.url,
    type: env.db.type,
    host: env.db.auth.host,
    database: env.db.auth.database,
    username: env.db.auth.username,
    password: env.db.auth.password,
    entities: getOsEnvArray('TYPEORM_AUTH_ENTITIES'),
    migrations: getOsEnvArray('TYPEORM_AUTH_MIGRATIONS'),
    namingStrategy: new DBNamingStrategy(),
    cli: {
      migrationsDir: getOsEnv('TYPEORM_AUTH_MIGRATIONS_DIR'),
      entitiesDir: getOsEnv('TYPEORM_AUTH_ENTITIES_DIR'),
    },
    logging: ['query'],
    synchronize: false,
    seeds: getOsEnvArray('TYPEORM_SEEDING_SEEDS'),
    factories: getOsEnvArray('TYPEORM_SEEDING_FACTORIES'),
  },
  {
    name: 'test',
    url: env.db.test.url,
    type: env.db.type,
    host: env.db.test.host,
    database: env.db.test.database,
    username: env.db.test.username,
    password: env.db.test.password,
    entities: getOsEnvArray('TYPEORM_ENTITIES'),
    migrations: getOsEnvArray('TYPEORM_MIGRATIONS'),
    namingStrategy: new DBNamingStrategy(),
    cli: {
      migrationsDir: getOsEnv('TYPEORM_MIGRATIONS_DIR'),
      entitiesDir: getOsEnv('TYPEORM_ENTITIES_DIR'),
    },
    logging: ['query'],
    synchronize: false,
    seeds: getOsEnvArray('TYPEORM_SEEDING_SEEDS'),
    factories: getOsEnvArray('TYPEORM_SEEDING_FACTORIES'),
  },
  {
    name: 'live',
    url: env.db.live.url,
    type: env.db.type,
    host: env.db.live.host,
    database: env.db.live.database,
    username: env.db.live.username,
    password: env.db.live.password,
    entities: getOsEnvArray('TYPEORM_ENTITIES'),
    migrations: getOsEnvArray('TYPEORM_MIGRATIONS'),
    namingStrategy: new DBNamingStrategy(),
    cli: {
      migrationsDir: getOsEnv('TYPEORM_MIGRATIONS_DIR'),
      entitiesDir: getOsEnv('TYPEORM_ENTITIES_DIR'),
    },
    logging: ['query'],
    synchronize: false,
    seeds: getOsEnvArray('TYPEORM_SEEDING_SEEDS'),
    factories: getOsEnvArray('TYPEORM_SEEDING_FACTORIES'),
  },
];