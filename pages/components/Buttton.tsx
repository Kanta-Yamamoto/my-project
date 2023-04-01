import clsx from "clsx";

type ButtonProps = {
  size?: "small" | "medium";
  color?: "primary" | "outlined" | "gray";
  grow?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
} & React.PropsWithoutRef<JSX.IntrinsicElements["button"]>;

const style = {
  sizes: {
    small: "px-3 py-2 rounded-6 min-w-[58px]",
    medium: "px-6 py-3 rounded-8 min-w-[117px]",
  },
  colors: {
    primary:
      "hover:opacity-80 bg-primary text-white border-primary disabled:bg-gray disabled:text-txt-gray disabled:border-gray",
    outlined:
      "bg-transparent text-primary border-primary disabled:bg-gray disabled:text-txt-gray disabled:border-gray hover:opacity-80",
    gray: "bg-gray border-gray text-black border-gray disabled:text-txt-gray hover:opacity-60",
  },
  loadingColors: {
    primary: "border-b-white border-r-white",
    outlined: "border-b-primary border-r-primary",
    gray: "border-b-black border-r-black",
  },
} as const;

export const Button = ({
  color = "primary",
  size = "medium",
  children,
  grow,
  isLoading,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        "flex items-center gap-1 border-[1px] text-bold relative font-semibold disabled:pointer-events-none",
        style.colors[color],
        style.sizes[size],
        grow && "w-full",
        isLoading && "pointer-events-none opacity-50"
      )}
      {...rest}
    >
      <span className={clsx("w-full", isLoading && "invisible")}>
        {children}
      </span>
      {isLoading && (
        <span
          className={clsx(
            "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          )}
        >
          <div
            className={clsx(
              "w-5 h-5 border-[2px] animate-spin rounded-full border-opacity-30",
              style.loadingColors[color]
            )}
          />
        </span>
      )}
    </button>
  );
};
