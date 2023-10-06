import { NextRouter, useRouter } from "next/router"

export default function PostDetails() {
  const router: NextRouter = useRouter();
  console.log(router.query);

  return (
    <div>
      <h1>You are seeing Blog Post Id: 
        {router.query.postId}</h1>
    </div>
  )
}
