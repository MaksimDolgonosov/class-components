import * as z from 'zod';
import { COUNTRIES } from '../constants/countries';
import { MAX_IMAGE_SIZE_BYTES } from '../utils/validateImage';

export const imageSchema = z
  .instanceof(FileList, { message: 'Image is required' })
  .refine((fileList) => fileList?.[0]?.size <= MAX_IMAGE_SIZE_BYTES, {
    message: `Image size must not exceed ${MAX_IMAGE_SIZE_BYTES / 1024 / 1024} MB`,
  })
  .refine(
    (fileList: FileList) =>
      fileList[0]?.type === 'image/png' ||
      fileList[0]?.type === 'image/jpeg' ||
      fileList[0]?.type === 'image/jpg',
    {
      message: 'Only PNG, JPEG and JPG images are allowed',
    }
  );

export const formSchema = z
  .object({
    name: z
      .string()
      .min(1, 'Name is required')
      .regex(/^[A-ZА-ЯЁ]/, 'Name must start with a capital letter'),
    age: z.coerce.number().min(1, 'Age must be at least 1'),
    email: z.string().email('Invalid email'),
    gender: z.enum(['select gender', 'male', 'female'], {
      errorMap: () => ({ message: 'Select gender' }),
    }),
    country: z.enum(COUNTRIES, {
      errorMap: () => ({ message: 'Select a country from the list' }),
    }),
    password: z
      .string()
      .min(4, 'Password is required and must be at least 4 characters'),
    confirmPassword: z.string().min(1, 'Confirm password is required'),
    image: imageSchema,
    terms: z.boolean().refine((value) => value === true, {
      message: 'You must accept the terms and conditions',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type FormInput = z.infer<typeof formSchema>;
