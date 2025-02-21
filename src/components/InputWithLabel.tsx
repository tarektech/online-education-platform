/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import { useFormContext } from 'react-hook-form';
import { z } from 'zod';

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const InputFormSchema = z.object({
  firstName: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  lastName: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  email: z.string().email({
    message: 'Invalid email address.',
  }),
  phone: z.string().min(2, {
    message: 'Phone must be at least 2 characters.',
  }),
});

type InputFormProps = {
  titleLabel: string;
  name: keyof z.infer<typeof InputFormSchema>;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function InputWithLabel({
  titleLabel,
  name,
  className,
  ...props
}: InputFormProps) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem >
          <FormLabel htmlFor={name}>{titleLabel}</FormLabel>

          <FormControl>
            <Input
              {...field}
              {...props}
              className={`w-full max-w-xs disabled:text-blue-500 dark:disabled:text-yellow-300 disabled:opacity-75 ${className}`}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
