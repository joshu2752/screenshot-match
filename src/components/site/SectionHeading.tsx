import type { ReactNode } from "react";

export function SectionHeading({
  index,
  label,
  title,
  children,
}: {
  index: string;
  label: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <div className="mb-14 grid gap-6 md:grid-cols-12 md:items-end">
      <div className="md:col-span-7">
        <p className="label-mono mb-5 flex items-center gap-3 text-primary">
          <span>SC {index}</span>
          <span className="h-px w-10 bg-primary/60" />
          <span className="text-muted-foreground">{label}</span>
        </p>
        <h2 className="font-display text-5xl md:text-7xl">{title}</h2>
      </div>
      {children && (
        <div className="text-lg leading-relaxed text-muted-foreground md:col-span-5">{children}</div>
      )}
    </div>
  );
}
