import Image from "next/image";
import Avatar from "../components/Avatar";
import Button from "../components/Button";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="flex flex-col gap-4 items-center">
          <Image
            src="/quest-agora-icon.png"
            alt="icon"
            width={100}
            height={100}
            className={"fade-in"}
          />
          <div className="fade-in-delay-1 p-3 bg-main rounded-8 w-full">
            <p className="fade-in-delay-1 text-white">
              quest-agoraはTodo管理ツールやプロフィール登録、ユーザー検索ができるWebサービスです
            </p>
          </div>
          <div className="fade-in-delay-1 p-3 bg-main rounded-8 w-full">
            <p className="fade-in-delay-1 text-white">
              左上のボタンから始めてみましょう
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}
