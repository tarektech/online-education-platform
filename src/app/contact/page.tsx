import React from 'react';
import { Metadata } from 'next';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'SkillBridge is a platform that helps you learn new skills and get paid for them.',
};

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-gray-500">
          Welcome to SkillBridge&apos;s Pricing Plan page, where we offer two
          comprehensive options to cater to your needs: Free and Pro. We believe
          in providing flexible and affordable pricing options for our services.
          Whether you&apos;re an individual looking to enhance your skills or a
          business seeking professional development solutions, we have a plan
          that suits you. Explore our pricing options below and choose the one
          that best fits your requirements.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
}
