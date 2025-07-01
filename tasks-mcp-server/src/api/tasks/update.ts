import type { TaskUpdateDto } from "../../types/index.js";
import { env } from '../../config/env.js';

export async function update(id: string, updateDto: TaskUpdateDto): Promise<void> {
  return fetch(`${env.apiUrl}/tasks/${id}`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(updateDto),
  }).then(() => { })
}