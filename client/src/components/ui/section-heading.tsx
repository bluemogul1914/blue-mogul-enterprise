import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
  className?: string;
}

export function SectionHeading({ 
  title, 
  subtitle, 
  alignment = "center",
  className 
}: SectionHeadingProps) {
  return (
    <div className={cn(
      "mb-12 md:mb-16 max-w-3xl",
      alignment === "center" ? "mx-auto text-center" : "text-left",
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-slate-600 leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={cn(
        "h-1.5 w-20 bg-primary mt-6 rounded-full",
        alignment === "center" ? "mx-auto" : ""
      )} />
    </div>
  );
}
