import * as z from 'zod';
import { MAX_IMAGE_SIZE_BYTES } from '../utils/validateImage';

export const imageSchema = z
  .instanceof(File, { message: 'Image is required' })
  .refine((file) => file.size <= MAX_IMAGE_SIZE_BYTES, {
    message: `Image size must not exceed ${MAX_IMAGE_SIZE_BYTES / 1024 / 1024} MB`,
  })
  .refine((file) => file.type === 'image/png' || file.type === 'image/jpeg', {
    message: 'Only PNG and JPEG images are allowed',
  });

export const formSchema = z
  .object({
    name: z
      .string()
      .min(1, 'Name is required')
      .regex(/^[A-ZА-ЯЁ]/, 'Name must start with a capital letter'),
    age: z.coerce.number().min(1, 'Age must be at least 1'),
    email: z.string().email('Invalid email'),
    gender: z.enum(['male', 'female'], {
      errorMap: () => ({ message: 'Gender is required' }),
    }),
    country: z.string().min(1, 'Country is required'),
    password: z.string().min(4, 'Password is required'),
    confirmPassword: z.string().min(1, 'Confirm password is required'),
    image: imageSchema,
    terms: z
      .boolean()
      .refine((value) => value === true, {
        message: 'You must accept the terms and conditions',
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type FormInput = z.infer<typeof formSchema>;
