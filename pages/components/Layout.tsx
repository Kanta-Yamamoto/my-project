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

      <div className="w-full h-[60px] bg-white">
        <Sidebar
          type="default"
          avatarSrc="/default_avatar.svg"
          name="デフォルトユーザー"
        />
      </div>
      <main className="w-full">{children}</main>
    </div>
  );
}

export default Layout;
