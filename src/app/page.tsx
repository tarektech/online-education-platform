import { Metadata } from 'next';    
import HomePage from './HomePage';

export const metadata: Metadata = {
  title: 'SkillBridge',
  description:
    'SkillBridge is a platform that helps you learn new skills and get paid for them.',
};

export default function Home() {
  return <HomePage />;
}
