export default function Grid({
  children,
  templateColumns,
  gap,
  className,
}: {
  children: React.ReactNode;
  templateColumns: string;
  gap: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "0";
  className?: string;
}) {
  return (
    <div
      className={`grid ${className}`}
      style={{
        gridTemplateColumns: templateColumns,
        gap: `var(--spacing-${gap})`,
      }}
    >
      {children}
    </div>
  );
}
