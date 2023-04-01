import Head from "next/head";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-bg-gray h-screen w-full text-black">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-white h-[60px] flex justify-between items-center px-4">
        <div className="h-10 w-10 bg-gray rounded-4 p-2 flex flex-col justify-around">
          <div className="rounded-full h-1 w-full bg-black" />
          <div className="rounded-full h-1 w-full bg-black" />
          <div className="rounded-full h-1 w-full bg-black" />
        </div>
        <div className="text-max font-extrabold h-max w-max">MyDev</div>
      </header>
      <main className="px-4 pt-8 sm:pt-10 sm:px-0 max-w-[400px] mx-auto flex justify-center items-center flex-col">
        {children}
      </main>
    </div>
  );
}

export default Layout;
