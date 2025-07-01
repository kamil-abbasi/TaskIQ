import { env } from "../../config/env";

export async function remove(id: string): Promise<void> {
  return fetch(`${env.apiUrl}/tasks/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
    }
  }).then(() => { })
}