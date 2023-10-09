import { NextRouter, useRouter } from "next/router"

export default function PostDetails() {
  const router: NextRouter = useRouter();
  console.log(router.query); // reading url param -- postId

  return (
    <div className="flex min-h-screen flex-col items-center">
      <h1>
        You are seeing Blog Post Id:
        {router.query.postId}
      </h1>
    </div>
  );
}
