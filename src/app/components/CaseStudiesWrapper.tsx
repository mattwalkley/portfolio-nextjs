'use client';

import PasswordGate from './PasswordGate';

interface CaseStudiesWrapperProps {
  children: React.ReactNode;
}

export default function CaseStudiesWrapper({ children }: CaseStudiesWrapperProps) {
  // Simple password - you can change this to whatever you want
  const PASSWORD = 'portfolio2024';

  return (
    <PasswordGate password={PASSWORD}>
      {children}
    </PasswordGate>
  );
}
