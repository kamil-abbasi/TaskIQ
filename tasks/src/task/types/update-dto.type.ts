import { Task } from "./task.type";

export type TaskUpdateDto = Partial<Omit<Task, 'id'>>;
