import type { Task } from "../../types";
import { env } from "../../config/env";

export async function findOne(id: string): Promise<Task> {
  return fetch(`${env.apiUrl}/tasks/${id}`,
    {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      }
    }
  ).then((res) => res.json())
}