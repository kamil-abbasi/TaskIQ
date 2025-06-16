import { Injectable } from '@nestjs/common';

import { Task, TaskCreateDto, TaskUpdateDto } from './types';
import { TaskRepository } from './task.repository';

@Injectable()
export class TaskService {
  constructor(private readonly taskRepository: TaskRepository) { }

  async find(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  async findOne(id: string): Promise<Task | null> {
    return this.taskRepository.findOne(id);
  }

  async create(createDto: TaskCreateDto): Promise<Task> {
    return this.taskRepository.create(createDto);
  }

  async update(id: string, updateDto: TaskUpdateDto): Promise<number> {
    return this.taskRepository.update(id, updateDto);
  }

  async remove(id: string): Promise<number> {
    return this.taskRepository.remove(id);
  }
}
