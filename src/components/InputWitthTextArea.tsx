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
import { TextareaHTMLAttributes } from 'react';
import { Textarea } from './ui/textarea';

const InputFormSchema = z.object({
  message: z.string().min(2, {
    message: 'Message must be at least 2 characters.',
  }),
});

type InputFormProps = {
  titleLabel: string;
  name: keyof z.infer<typeof InputFormSchema>;
  className?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function InputWithTextArea({
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
        <FormItem>
          <FormLabel htmlFor={name}>{titleLabel}</FormLabel>

          <FormControl>
            <Textarea
              id={name}
              className={`w-full max-w-full disabled:text-blue-500 dark:disabled:text-yellow-300 disabled:opacity-75 ${className}`}
              {...field}
              {...props}
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
