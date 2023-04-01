import Link from "next/link";
import { Avatar } from "../components/Avatar";
import { Button } from "../components/Button";
import Layout from "../components/Layout";

export default function MyPage() {
  return (
    <>
      <Layout>
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
      </Layout>
    </>
  );
}
