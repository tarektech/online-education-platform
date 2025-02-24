import CarouselSection from '@/components/Carousel';
import AuthForm from './AuthForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Login or Sign up to SkillBridge',
};

export default function AuthPage() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 w-[90%]  lg:w-[80%] mx-auto py-16">
      <div className="order-2 lg:order-1">
        <CarouselSection />
      </div>
      <div className="flex items-center justify-center order-1 lg:order-2">
        <AuthForm />
      </div>
    </div>
  );
}
