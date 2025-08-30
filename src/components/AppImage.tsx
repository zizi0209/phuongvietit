import Image, { ImageProps } from "next/image";
import { withBasePath } from "@/lib/basePath";

type Props = Omit<ImageProps, "src"> & { src: string };

export default function AppImage({ src, ...rest }: Props) {
  return <Image src={withBasePath(src)} {...rest} />;
}
