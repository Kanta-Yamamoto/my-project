import clsx from "clsx";
import Image, { ImageProps } from "next/image";

type AvatarProps = {
  size: "small" | "medium" | "large";
} & ImageProps;

const style = {
  small: "w-[18px] h-[18px]",
  medium: "w-[24px] h-[24px]",
  large: "w-[64px] h-[64px]",
} as const;

export const Avatar = ({ src, alt = "", size, ...rest }: AvatarProps) => {
  return (
    <Image
      src={src ? src : "/default_avatar.svg"}
      width={64}
      height={64}
      alt={alt}
      className={clsx(style[size])}
      {...rest}
    ></Image>
  );
};
