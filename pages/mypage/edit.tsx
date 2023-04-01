import Layout from "../components/Layout";
import { Button } from "../components/Button";

export default function Edit() {
  return (
    <>
      <Layout>
        <div className="w-full flex flex-col items-center gap-4">
          <div className="bg-white rounded-8 p-4 w-full"></div>
          <Button color="gray">完了</Button>
        </div>
      </Layout>
    </>
  );
}
