import Image from "next/image";
import Avatar from "../components/Avatar";
import Button from "../components/Button";
import Layout from "../components/Layout";
import { useQuery, useMutation } from '@apollo/client';
import { GET_ALL_TODOS } from '../graphql/queries';
import { CREATE_TODO } from '../graphql/mutations';



export default function Home() {

  const { loading, error, data } = useQuery(GET_ALL_TODOS);

const [createTodo] = useMutation(CREATE_TODO, {
  update(cache, { data: { createTodo } }) {
    const existingTodos:any = cache.readQuery({ query: GET_ALL_TODOS });
    cache.writeQuery({
      query: GET_ALL_TODOS,
      data: { todoFindAll: existingTodos.todoFindAll.concat([createTodo]) },
    });
  },
});
if (loading) return <p>Loading...</p>;
if (error) return <p>Error: {error.message}</p>;

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

        <div>
      <ul>
        {data.todoFindAll.map((todo:any) => (
          <li key={todo.todo_id}>{todo.title}</li>
        ))}
      </ul>
      {/* <button
        onClick={() =>
          createTodo({
            variables: {
              todo: {
                title: 'New Todo',
                detail: 'This is a new todo item.',
                deadline: '2023-04-30T23:59:59Z',
              },
            },
          })
        }
      >
        Add Todo
      </button> */}
    </div>

      </Layout>
    </>
  );
}
