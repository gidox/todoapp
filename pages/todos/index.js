import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function Todos({ posts }) {
  return (
    <Layout>
      <Head>
        <title>Todo page</title>
      </Head>

      <h1 className="text-6xl font-bold">
        Todo page with{" "}
        <a className="text-blue-600" href="https://nextjs.org">
          Next.js!
        </a>
      </h1>
      {posts.map((val) => (
        <div
          key={val.id}
          className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20"
        >
          <div>
            <h2 className="text-gray-800 text-3xl font-semibold">
              {val.title}
            </h2>
            <p className="mt-2 text-gray-600">{val.body}</p>
          </div>
          <div className="flex justify-end mt-4">
            <Link href={`/todos/${val.id}`}>
              <a className="text-xl font-medium text-indigo-500">View more</a>
            </Link>
          </div>
        </div>
      ))}
    </Layout>
  );
}

export async function getStaticProps(context) {
  const rest = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await rest.json();
  return {
    props: {
      posts: data,
    },
  };
}
