import React, { useState } from "react";
import Layout from "../../components/Layout";
import Button from "../../components/Button";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

interface FormData {
  username: string;
  introduce: string;
}

export default function Edit() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FormData) => router.push("/mypage");

  const [introduceError, setIntroduceError] = useState(false);
  const [introduceCount, setIntroduceCount] = useState(0);

  const handleIntroduceChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIntroduceCount(e.target.value.length);
    if (e.target.value.length > 100) {
      setIntroduceError(true);
      e.target.setCustomValidity("自己紹介は100文字以内で入力してください");
    } else {
      setIntroduceError(false);
      e.target.setCustomValidity("");
    }
  };

  return (
    <>
      <Layout>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col items-center gap-4"
        >
          <div className="bg-white rounded-8 p-4 w-full gap-4 grid">
            <div className="flex flex-col gap-1">
              <label>名前</label>
              <input
                className={`px-2 h-8 rounded-4 focus:outline-none ${
                  errors.username && "border-error-red border-[1px]"
                }`}
                {...register("username", { required: "名前は必須です" })}
              />
              <p className="text-error-red">{errors.username?.message}</p>
            </div>
            <div className="flex flex-col gap-1">
              <label>自己紹介</label>
              <textarea
                className={`${
                  introduceError || errors.introduce?.message
                    ? "border-[1px] border-error-red"
                    : ""
                } h-20 resize-none rounded-4 p-2 focus:outline-none`}
                {...register("introduce", {
                  required: "自己紹介は必須です",
                  maxLength: {
                    value: 100,
                    message: "自己紹介は100文字以内で入力してください",
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
                    introduceCount > 100 ? "text-red-500" : ""
                  }`}
                >
                  {introduceCount}/100
                </p>
              </div>
            </div>
          </div>

          <Button color="gray" type="submit">
            完了
          </Button>
        </form>
      </Layout>
    </>
  );
}
