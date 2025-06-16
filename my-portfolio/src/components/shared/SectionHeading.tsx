"use client";

export default function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-primary mb-4">
        {title}
      </h2>
      <p className="text-muted-foreground text-base md:text-lg">{subtitle}</p>
    </div>
  );
}
