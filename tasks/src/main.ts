import { NestFactory } from '@nestjs/core';
import { json, urlencoded } from 'express';

import { AppModule } from './app.module';
import { config } from './config/env';
import { ConsoleLogger } from '@nestjs/common';
import { HttpExceptionFilter } from './common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new ConsoleLogger({
      prefix: 'Tasks',
    }),
  });

  app.useGlobalFilters(new HttpExceptionFilter());
  app.use(json(), urlencoded({ extended: true }));

  await app.listen(config.port);
}
bootstrap();
