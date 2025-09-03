import type { HTMLAttributes } from "react";

// Một anchor vô hình, có scroll-margin-top để bù chiều cao header sticky
export default function SectionAnchor(
  props: HTMLAttributes<HTMLDivElement> & { id: string }
) {
  const { id, ...rest } = props;
  return (
    <div
      id={id}
      // block 0-height + scroll-mt-24 (≈96px) để bù header
      className="block h-0 scroll-mt-24"
      {...rest}
    />
  );
}
