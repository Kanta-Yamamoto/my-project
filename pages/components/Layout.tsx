import Head from "next/head";
import styles from "/styles/Home.module.css";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-base-gray min-h-100vh w-full text-black">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-white h-[60px] flex justify-between items-center">
        <div className="text-max font-extrabold h-max w-max">MyDev</div>
        <div className="text-max font-extrabold h-max w-max"></div>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
}

export default Layout;
