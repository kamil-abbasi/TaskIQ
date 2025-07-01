import type { Task } from "@/types/index.js";
import { env } from '@/config/env.js';

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