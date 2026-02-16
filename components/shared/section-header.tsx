interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({ label, title, subtitle, centered = true }: SectionHeaderProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? "text-center" : ""}`}>
      {label && (
        <span className="inline-block text-sm font-semibold uppercase tracking-wider text-gold-600 mb-3">
          {label}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
