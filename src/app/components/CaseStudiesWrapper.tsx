"use client";

import PasswordGate from "./PasswordGate";

interface CaseStudiesWrapperProps {
  children: React.ReactNode;
}

export default function CaseStudiesWrapper({
  children,
}: CaseStudiesWrapperProps) {
  const PASSWORD = "opensesame";

  return <PasswordGate password={PASSWORD}>{children}</PasswordGate>;
}
