import { NextRouter, useRouter } from "next/router";

export default function Comments() {
  const router: NextRouter = useRouter();
  console.log(router.query);
  
  return (
    <div>
      <h1>All Comments of Blog Post Id: 
        {router.query.postId} </h1>
    </div>
  );
}
