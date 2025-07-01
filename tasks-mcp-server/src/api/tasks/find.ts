import type { Task } from "../../types/index.js";
import { env } from '../../config/env.js';

export async function find(): Promise<Task[]> {
  return fetch(`${env.apiUrl}/tasks`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  }).then((res) => res.json())
}