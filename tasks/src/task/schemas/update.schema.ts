import { z } from 'zod';

export const updateTaskSchema = z
  .object({
    name: z.string().max(255).optional(),
    completed: z.boolean().optional(),
  })
  .strict();
