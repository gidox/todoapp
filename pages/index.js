import Link from "next/link";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <h1 className="text-6xl font-bold">
        Welcome to Todoapp with{" "}
        <a className="text-blue-600" href="https://nextjs.org">
          Next.js!
        </a>
      </h1>

      <p className="mt-3 text-2xl">
        Navigate to todos{" "}
        <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
          <Link href="todos">
            <a>pages/todos/index.js</a>
          </Link>
        </code>
      </p>
    </Layout>
  );
}
