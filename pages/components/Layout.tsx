import Head from "next/head";
import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-bg-gray h-screen text-black w-full">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full h-[60px]">
        <Sidebar
          type="default"
          avatarSrc="/default_avatar.svg"
          name="デフォルトユーザー"
        />
      </div>
      <main className="px-4 pt-8 sm:pt-10 sm:px-0 max-w-[400px] mx-auto flex justify-center items-center flex-col">
        {children}
      </main>
    </div>
  );
}

export default Layout;
