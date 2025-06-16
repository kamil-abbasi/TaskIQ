import {
  Body,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { TaskService } from './task.service';
import { ZodValidationPipe } from 'src/common';
import { createTaskSchema, updateTaskSchema } from './schemas';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) { }

  @Get()
  async find() {
    try {
      const tasks = await this.taskService.find();

      return tasks;
    } catch (err) {
      throw new InternalServerErrorException(null, { cause: err });
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const task = await this.taskService.findOne(id);

      if (!task) {
        throw new NotFoundException('Task not found!');
      }

      return task;
    } catch (err) {
      if (err instanceof NotFoundException) {
        throw err;
      }

      throw new InternalServerErrorException(null, { cause: err });
    }
  }

  @Post()
  async create(
    @Body(new ZodValidationPipe(createTaskSchema))
    body: typeof createTaskSchema._type,
  ) {
    try {
      const task = await this.taskService.create(body);

      return task;
    } catch (err) {
      throw new InternalServerErrorException(null, { cause: err });
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body(new ZodValidationPipe(updateTaskSchema))
    body: typeof updateTaskSchema._type,
  ) {
    try {
      const affectedCount = await this.taskService.update(id, body);

      if (affectedCount <= 0) {
        throw new NotFoundException('Task not found!');
      }
    } catch (err) {
      if (err instanceof NotFoundException) {
        throw err;
      }

      throw new InternalServerErrorException(null, { cause: err });
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      const affectedCount = await this.taskService.remove(id);

      if (affectedCount <= 0) {
        throw new NotFoundException('Task not found!');
      }
    } catch (err) {
      if (err instanceof NotFoundException) {
        throw err;
      }

      throw new InternalServerErrorException(null, { cause: err });
    }
  }
}
