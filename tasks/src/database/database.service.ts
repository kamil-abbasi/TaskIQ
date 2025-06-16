import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import { drizzle, NodePgDatabase } from 'drizzle-orm/node-postgres';

import * as schema from './schemas';
import { ConfigService } from '@nestjs/config';

type DatabaseConfig = {
  name: string;
  host: string;
  port: number;
  user: string;
  password: string;
};

@Injectable()
export class DatabaseService {
  private readonly config: DatabaseConfig;
  private pool: Pool;

  public db: NodePgDatabase<typeof schema>;

  constructor(private readonly configService: ConfigService) {
    this.config = this.configService.get<DatabaseConfig>('db', {
      infer: true,
    });

    const { host, name, password, port, user } = this.config;

    this.pool = new Pool({
      host,
      database: name,
      password,
      port,
      user,
    });

    this.db = drizzle({
      client: this.pool,
      schema,
      logger: true,
    });
  }

  async close() {
    await this.pool.end();
  }
}
