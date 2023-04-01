import clsx from "clsx";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { useState } from "react";
import { Avatar } from "../components/Avatar";

interface NestedMenuItem {
  name: string;
  link: string;
}

interface Item {
  name: string;
  link: string;
  icon?: React.ReactNode;
  hasUnderbar?: boolean;
  nested?: NestedMenuItem[];
}

type SidebarProps = {
  type: "default" | "setting";
  className?: string;
  children?: React.ReactNode;
  avatarSrc: string;
  name: string;
  content?: Item[];
};

const style = {
  types: {
    default:
      "bg-gradient-to-b from-[#1D0F75] to-[#4E4392] text-white opacity-80",
    setting: "bg-bg-gray text-black",
  },
} as const;

export const Sidebar = ({
  children,
  avatarSrc,
  name,
  type,
  ...rest
}: SidebarProps) => {
  interface settingItem {
    name: string;
    link: string;
  }

  const footerItems: settingItem[] = [
    { name: "設定", link: "" },
    { name: "ログアウト", link: "" },
  ];

  const defaultItems: Item[] = [
    {
      name: "ホーム",
      link: "/",
    },
    {
      name: "通知",
      link: "",
      hasUnderbar: true,
    },
    {
      name: "マイページ",
      link: "/mypage",
    },
    {
      name: "タスク",
      link: "/task",
      // nested: [
      //   { name: "メニュー", link: "" },
      //   { name: "ポートフォリオ", link: "" },
      // ],
    },
    {
      name: "検索",
      link: "",
    },
  ];

  const settingItems: Item[] = [
    { name: "アカウント", link: "" },
    { name: "決済", link: "" },
    { name: "ラベル", link: "" },
  ];

  const Items = type === "default" ? defaultItems : settingItems;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative z-100">
        <div
          onMouseLeave={() => setIsOpen(!isOpen)}
          className={`${"fixed"}  backdrop-blur-lg shadow-lg h-screen overflow-hidden transition-all ease-in-out ${
            isOpen
              ? "w-[213px] animate-openAnimation duration-500"
              : "w-0 animate-closeAnimation duration-500"
          }`}
        >
          <>
            <div
              className={clsx("min-w-[213px] h-full p-3", style.types[type])}
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between py-2 pl-2">
                  {type === "default" ? (
                    <>
                      <div className="flex gap-2 py-[6.5px]">
                        <Avatar
                          size={"medium"}
                          src={avatarSrc}
                          alt={"sidebar_user_avatar"}
                        />
                        <div className="text-white truncate w-[130px] sm:w-[150px]">
                          {name}
                        </div>
                      </div>
                      <span
                        className="sm:hidden rounded-8 p-1 hover:bg-white hover:bg-opacity-70 h-max my-auto cursor-pointer"
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        <div className="w-6 h-6 rounded-4 bg-gray flex flex-col justify-around p-1">
                          <div className="w-full px-1 h-0.5 bg-white rounded-20" />
                          <div className="w-full px-1 h-0.5 bg-white rounded-20" />
                          <div className="w-full px-1 h-0.5 bg-white rounded-20" />
                        </div>
                      </span>
                    </>
                  ) : (
                    <div className="flex items-center cursor-pointer">
                      <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-black"
                      >
                        設定
                      </button>
                    </div>
                  )}
                </div>

                <div className="flex flex-col justify-between h-full overflow-y-scroll">
                  <div>
                    {Items.map((item) => (
                      <>
                        <Disclosure>
                          {!item.nested ? (
                            <Link href={item.link}>
                              <div
                                key={item.name}
                                className={clsx(
                                  "hover:bg-white hover:bg-opacity-20 hover:rounded-8 hover:cursor-pointer hover:font-normal font-light p-2 w-full flex"
                                )}
                              >
                                <span className="h-max my-auto mr-2">
                                  {item.icon}
                                </span>
                                {item.name}
                              </div>
                            </Link>
                          ) : (
                            <>
                              <Disclosure.Button className="w-full">
                                <div
                                  key={item.name}
                                  className={clsx(
                                    "hover:bg-white hover:bg-opacity-20 hover:rounded-8 hover:cursor-pointer hover:font-normal font-light p-2 w-full flex"
                                  )}
                                >
                                  <span className="h-max my-auto mr-2">
                                    {item.icon}
                                  </span>
                                  {item.name}
                                </div>
                              </Disclosure.Button>
                              <Disclosure.Panel>
                                {item.nested.map((item) => (
                                  <>
                                    <div className="pl-8 py-1 hover:bg-white hover:bg-opacity-20 hover:rounded-8 hover:cursor-pointer hover:font-normal">
                                      {item.name}
                                    </div>
                                  </>
                                ))}
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                        {item.hasUnderbar && (
                          <div className="my-2 w-full border-b-[1px] border-white" />
                        )}
                      </>
                    ))}
                  </div>
                  {type === "default" && (
                    <div className="flex flex-col py-2 mt-10">
                      {footerItems.map((item) => (
                        <>
                          <Link
                            href={item.link}
                            className="hover:bg-white hover:bg-opacity-20 hover:rounded-4 hover:cursor-pointer hover:font-normal text-md font-light px-2 py-[6px] w-full"
                          >
                            {item.name}
                          </Link>
                        </>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </>
        </div>
        <button
          className={`${
            isOpen
              ? "opacity-0 duration-200 left-3"
              : "animate-sidebarButtonDisplay duration-1000 left-3"
          } transition-all ease-in-out p-2 h-max my-auto cursor-pointer absolute top-3`}
          onClick={() => setIsOpen(!isOpen)}
          disabled={isOpen}
          onMouseEnter={() => setIsOpen(true)}
        >
          <div className="w-6 h-6 rounded-4 bg-gray flex flex-col justify-around p-1">
            <div className="w-full px-1 h-0.5 bg-white rounded-20" />
            <div className="w-full px-1 h-0.5 bg-white rounded-20" />
            <div className="w-full px-1 h-0.5 bg-white rounded-20" />
          </div>
        </button>
      </div>
    </>
  );
};
