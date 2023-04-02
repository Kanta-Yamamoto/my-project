import Head from "next/head";
import Image from "next/image";
import { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-bg-gray min-h-screen text-black w-full">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full h-[60px] bg-main fixed top-0 left-0 z-10">
        <Sidebar
          type="default"
          avatarSrc="/default_avatar.svg"
          name="デフォルトユーザー"
        />

        <Image
          src="/quest-agora-title.svg"
          alt=""
          width={300}
          height={60}
          className="ml-auto mr-0"
        />
      </div>

      <main className="px-4 pt-20 sm:px-0 max-w-[400px] mx-auto flex justify-center items-center flex-col pb-10">
        {children}
      </main>
    </div>
  );
}

export default Layout;
