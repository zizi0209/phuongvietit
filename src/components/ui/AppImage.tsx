import Image, { ImageProps } from "next/image";

export default function AppImage(props: ImageProps) {
  // Wrapper mặc định cho Next/Image
  return (
    <Image loading="lazy" sizes="(min-width: 1024px) 800px, 100vw" {...props} />
  );
}
