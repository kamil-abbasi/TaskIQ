import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { Task, TaskCreateDto, TaskUpdateDto } from './types';
import { tasksTable } from 'src/database/schemas';
import { eq } from 'drizzle-orm';

@Injectable()
export class TaskRepository {
  constructor(private readonly db: DatabaseService) { }

  async find(): Promise<Task[]> {
    return this.db.db.select().from(tasksTable);
  }

  async findOne(id: string): Promise<Task | null> {
    try {
      const tasks = await this.db.db.select().from(tasksTable).where(eq(tasksTable.id, id));

      return tasks[0] || null;
    } catch (err) {
      throw err;
    }
  }

  async create(createDto: TaskCreateDto): Promise<Task> {
    const task = await this.db.db.insert(tasksTable).values(createDto).returning();

    return task[0];
  }

  async update(id: string, updateDto: TaskUpdateDto): Promise<number> {
    try {
      const result = await this.db.db.update(tasksTable).set(updateDto).where(eq(tasksTable.id, id));

      return result.rowCount || 0;
    } catch (err) {
      throw err;
    }
  }

  async remove(id: string): Promise<number> {
    try {
      const result = await this.db.db.delete(tasksTable).where(eq(tasksTable.id, id));

      return result.rowCount || 0;
    } catch (err) {
      throw err;
    }
  }
}
