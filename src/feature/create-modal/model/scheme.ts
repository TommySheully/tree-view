import { z } from 'zod';

export const createValidationSchema = z.object({
  name: z.string().trim().min(1, 'Required field'),
});

export type CreateValidationSchema = z.infer<typeof createValidationSchema>;
