import Image, { ImageProps } from "next/image";

export default function AppImage({ alt = "", ...props }: ImageProps) {
  return (
    <Image
      alt={alt} // ✅ luôn có alt, nếu không truyền thì = ""
      loading="lazy"
      sizes="(min-width: 1024px) 800px, 100vw"
      {...props} // ✅ bao gồm cả src, width, height,...
    />
  );
}
