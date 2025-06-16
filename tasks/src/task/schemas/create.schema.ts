import { z } from 'zod';

export const createTaskSchema = z
  .object({
    name: z.string().max(255),
  })
  .strict();
