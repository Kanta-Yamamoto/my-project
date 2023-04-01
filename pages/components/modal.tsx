import { Dialog } from "@headlessui/react";
import clsx from "clsx";

type ModalProps = {
  size?: "medium" | "large" | "custom";
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: any;
  hasCrossButton?: boolean;
};

const style = {
  sizes: {
    medium: "sm:w-[500px] px-4 sm:px-8 py-10",
    large: "sm:w-[600px] px-4 sm:px-8 py-10",
    custom: "w-max px-0",
  },
} as const;

export const Modal = ({
  children,
  isOpen,
  setIsOpen,
  hasCrossButton,
  size = "medium",
  ...rest
}: ModalProps) => {
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(!isOpen)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/40" aria-hidden="true">
          <div className={clsx("flex h-full items-center justify-center p-4")}>
            <Dialog.Panel
              className={clsx(
                "max-h-full mx-auto rounded-10 bg-white drop-shadow-md overflow-y-auto w-full relative",
                style.sizes[size]
              )}
              {...rest}
            >
              {hasCrossButton && (
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-6 h-6 flex absolute right-4 top-4 justify-center items-center"
                >
                  ✖️
                </button>
              )}
              <div className="mx-auto">{children}</div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </>
  );
};
