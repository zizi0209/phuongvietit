import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  id?: string;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
};

export default function Section({
  id,
  className,
  containerClassName,
  children,
}: Props) {
  return (
    <section id={id} className={cn("section-padding scroll-mt-24", className)}>
      <div
        className={cn(
          "container mx-auto container-padding",
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
