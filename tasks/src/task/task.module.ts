import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskRepository } from './task.repository';
import { TaskController } from './task.controller';

@Module({
  providers: [TaskService, TaskRepository],
  exports: [TaskService],
  controllers: [TaskController],
})
export class TaskModule { }
