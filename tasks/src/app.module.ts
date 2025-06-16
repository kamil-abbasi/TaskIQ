import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { TaskModule } from './task/task.module';
import { DatabaseModule } from './database/database.module';
import { config } from './config/env';

@Module({
  imports: [
    TaskModule,
    DatabaseModule,
    ConfigModule.forRoot({
      load: [() => config],
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
})
export class AppModule { }
