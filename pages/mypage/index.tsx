import Link from "next/link";
import { Avatar } from "../components/Avatar";
import { Button } from "../components/Button";
import Layout from "../components/Layout";

export default function MyPage() {
  return (
    <>
      <Layout>
        <div className="px-4 pt-8 sm:pt-10 sm:px-0 max-w-[400px] mx-auto flex justify-center items-center flex-col">
          <div className="w-full flex flex-col items-center gap-4">
            <div className="bg-white rounded-8 p-4 w-full">
              {/* <span className=""> */}
              <Avatar src="" alt="" size="large" className="mx-auto" />
              {/* </span> */}
              <p>名前：</p>
              <p>好きなもの：</p>
              <p>自己紹介：</p>
              <p>タグ:</p>
            </div>
            <Link href="/mypage/edit">
              <Button color="gray">編集</Button>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
}
