import { NextRouter, useRouter } from "next/router";

export default function CommentById() {
  const router: NextRouter = useRouter();
  console.log(router.query);

  return (
    <div>
      You are seeing comment Id: 
      {router.query.commentId} of Blog Post Id:{" "}
      {router.query.postId}
    </div>
  );
}
