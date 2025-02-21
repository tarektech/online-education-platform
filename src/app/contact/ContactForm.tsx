'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import InputWithLabel from '@/components/InputWithLabel';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import InputWithTextArea from '@/components/InputWitthTextArea';

const contactFormSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  message: z.string().min(1),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: z.infer<typeof contactFormSchema>) => {
    console.log(data);
  };

  return (
    <div className="w-full py-4 md:py-8">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col space-y-4 md:space-y-6 "
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mx-10 py-4 md:mx-6">
            <InputWithLabel titleLabel="First Name" name="firstName" />
            <InputWithLabel titleLabel="Last Name" name="lastName" />
            <InputWithLabel titleLabel="Email" name="email" />
            <InputWithLabel titleLabel="Phone" name="phone" />
          </div>
          <InputWithTextArea
            titleLabel="Message"
            name="message"
            className="min-h-[120px] md:min-h-[150px]"
          />
          <Button
            type="submit"
            className="w-fit px-4 md:px-6 py-2.5 md:py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-md self-center"
          >
            Send Your Message
          </Button>
        </form>
      </Form>
    </div>
  );
}
