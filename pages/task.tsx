import Button from "../components/Button";
import Layout from "../components/Layout";
import Modal from "../components/modal";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

interface FormData {
  username: string;
  introduce: string;
}

interface Item {
  name: string;
  content: string;
  index?: number;
}

const Items: Item[] = [
  {
    name: "タスク2",
    content: "デプロイを行う",
  },
  {
    name: "タスク3",
    content: "サービスの広告を行う",
  },
  {
    name: "タスク1タスク1タスク1タスク1タスク1タスク1タスク1タスク1タスク1タスク1タスク1タスク1タスク1",
    content:
      "開発のポートフォリオを作成する開発のポートフォリオを作成する開発のポートフォリオを作成する開発のポートフォリオを作成する開発のポートフォリオを作成する開発のポートフォリオを作成する開発のポートフォリオを作成する開発のポートフォリオを作成する開発のポートフォリオを作成する開発のポートフォリオを作成する開発のポートフォリオを作成する開発のポートフォリオを作成する開発のポートフォリオを作成する開発のポートフォリオを作成する開発のポートフォリオを作成する開発のポートフォリオを作成する開発のポートフォリオを作成する開発のポートフォリオを作成する",
  },
  {
    name: "タスク2",
    content: "デプロイを行う",
  },
  {
    name: "タスク3",
    content: "サービスの広告を行う",
  },
  {
    name: "タスク1タスク1タスク1タスク1タスク1タスク1タスク1タスク1タスク1タスク1タスク1タスク1タスク1",
    content:
      "開発のポートフォリオを作成する開発のポートフォリオを作成する開発のポートフォリオを作成する開発のポートフォリオを作成する開発のポートフォリオを作成する開発のポートフォリオを作成する開発のポートフォリオを作成する開発のポートフォリオを作成する開発のポートフォリオを作成する開発のポートフォリオを作成する開発のポートフォリオを作成する開発のポートフォリオを作成する開発のポートフォリオを作成する開発のポートフォリオを作成する開発のポートフォリオを作成する開発のポートフォリオを作成する開発のポートフォリオを作成する開発のポートフォリオを作成する",
  },
  {
    name: "タスク2",
    content: "デプロイを行う",
  },
  {
    name: "タスク3",
    content: "サービスの広告を行う",
  },
];

export default function Task() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    setIsModalOpen(false);
  };

  const [introduceError, setIntroduceError] = useState(false);
  const [introduceCount, setIntroduceCount] = useState(0);

  const handleIntroduceChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIntroduceCount(e.target.value.length);
    if (e.target.value.length > 200) {
      setIntroduceError(true);
      e.target.setCustomValidity("タスクの詳細は200文字以内で入力してください");
    } else {
      setIntroduceError(false);
      e.target.setCustomValidity("");
    }
  };
  return (
    <>
      <Layout>
        <Modal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          hasCrossButton={true}
        >
          <h1 className="font-bold text-xl">タスクの追加</h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col items-center gap-4"
          >
            <div className="bg-white rounded-8 py-4 w-full gap-4 grid">
              <div className="flex flex-col gap-1">
                <label>タイトル</label>
                <input
                  className={`px-2 h-8 rounded-4 focus:outline-none ${
                    errors.username && "border-error-red border-[1px]"
                  }`}
                  {...register("username", { required: "名前は必須です" })}
                />
                <p className="text-error-red">{errors.username?.message}</p>
              </div>
              <div className="flex flex-col gap-1">
                <label>詳細を記入</label>
                <textarea
                  className={`${
                    introduceError || errors.introduce?.message
                      ? "border-[1px] border-error-red"
                      : ""
                  } h-40 resize-none rounded-4 p-2 focus:outline-none`}
                  {...register("introduce", {
                    required: "詳細は必須です",
                    maxLength: {
                      value: 200,
                      message: "詳細は200文字以内で入力してください",
                    },
                  })}
                  onChange={handleIntroduceChange}
                />
                <div className="flex justify-between">
                  <p className="text-error-red">
                    {errors.introduce?.message ||
                      (introduceError
                        ? "自己紹介は100文字以内で入力してください"
                        : "")}
                  </p>
                  <p
                    className={`text-right ${
                      introduceCount > 200 ? "text-red-500" : ""
                    }`}
                  >
                    {introduceCount}/200
                  </p>
                </div>
              </div>
            </div>

            <Button color="gray" type="submit">
              追加する
            </Button>
          </form>
        </Modal>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex justify-end">
            <Button
              size="small"
              color="gray"
              onClick={() => setIsModalOpen(true)}
            >
              追加
            </Button>
          </div>

          {Items.map((item) => (
            <>
              <div
                key={item.name}
                className="bg-white rounded-8 cursor-pointer"
              >
                <div className="w-full bg-primary text-white font-bold rounded-t-8 p-2">
                  {item.name}
                </div>

                <div className="p-2 min-h-[80px] text-left">
                  {item.content}{" "}
                </div>
              </div>
            </>
          ))}
        </div>
      </Layout>
    </>
  );
}
