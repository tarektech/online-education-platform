import React from 'react';
import AboutCard from './aboutCard';
import { about } from '@/constant/about';

export default function AboutusPage() {
  return (
    <div className="flex flex-col gap-4 max-w-7xl mx-auto px-4 py-12">
      <AboutCard
        about={about[0].Achievements.map((achievement) => ({
          ...achievement,
          icon: React.createElement(achievement.icon),
        }))}
        headtitle="Achievements"
        headdescription="Our commitment to excellence has led us to achieve significant milestones along our journey. Here are some of our notable achievements"
      />
      <AboutCard
        about={about[0].OurGoals.map((goal) => ({
          ...goal,
          icon: React.createElement(goal.icon),
        }))}
        headtitle="Our Goals"
        headdescription="At SkillBridge, our goal is to empower individuals from all backgrounds to thrive in the world of design and development. We believe that education should be accessible and transformative, enabling learners to pursue their passions and make a meaningful impact.
Through our carefully crafted courses, we aim to"
      />
    </div>
  );
}
