import { NestFactory } from '@nestjs/core';
import { json, urlencoded } from 'express';

import { AppModule } from './app.module';
import { config } from './config/env';
import { ConsoleLogger } from '@nestjs/common';
import { HttpExceptionFilter } from './common';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new ConsoleLogger({
      prefix: 'Tasks',
    }),
  });

  app.enableCors({
    origin: ['http://localhost:4000'],
    methods: ['GET', 'PATCH', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type'],
  } as CorsOptions);
  app.useGlobalFilters(new HttpExceptionFilter());
  app.use(json(), urlencoded({ extended: true }));

  await app.listen(config.port);
}
bootstrap();
