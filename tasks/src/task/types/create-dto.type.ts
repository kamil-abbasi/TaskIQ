import { Task } from "./task.type";

export type TaskCreateDto = Omit<Task, 'id' | 'completed'>;
