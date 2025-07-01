import { env } from '../../config/env';
import type { TaskUpdateDto } from '../../types';

export async function update(id: string, updateDto: TaskUpdateDto): Promise<void> {
  return fetch(`${env.apiUrl}/tasks/${id}`, {
    method: 'PATCH',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(updateDto),
  }).then(() => { })
}