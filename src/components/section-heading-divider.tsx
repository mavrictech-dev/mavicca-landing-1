import { Leaf } from "lucide-react";

type SectionHeadingDividerProps = {
  align?: "start" | "center";
  className?: string;
  lineClassName?: string;
  iconClassName?: string;
};

export function SectionHeadingDivider({
  align = "center",
  className = "",
  lineClassName = "",
  iconClassName = "",
}: SectionHeadingDividerProps) {
  const alignment = align === "start" ? "justify-start" : "justify-center";

  return (
    <div
      className={`flex items-center gap-4 text-[#064118] ${alignment} ${className}`}
      aria-hidden="true"
    >
      <span className={`h-0.5 w-20 bg-current sm:w-24 ${lineClassName}`} />
      <Leaf className={`size-8 shrink-0 fill-current/10 ${iconClassName}`} strokeWidth={1.8} />
      <span className={`h-0.5 w-20 bg-current sm:w-24 ${lineClassName}`} />
    </div>
  );
}
