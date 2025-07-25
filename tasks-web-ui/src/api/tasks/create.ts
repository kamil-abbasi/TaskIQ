import type { TaskCreateDto, Task } from "../../types";
import { env } from "../../config/env";

export async function create(createDto: TaskCreateDto): Promise<Task> {
  return fetch(`${env.apiUrl}/tasks`,
    {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(createDto),
    }
  ).then((res) => res.json())
}