import { NextRouter, useRouter } from "next/router";

export default function ProductDetails() {
  
  const router: NextRouter = useRouter();
  // console.log(router);  // you can see entire stuff about router

  console.log(router.pathname); // path for example: products/[productId]
  
  // to get URL params and query params try the following
  console.log(router.query); // for ex: products/1 

  return (
    <div>
      <h1>Product Details of Product Id: {router.query.productId}</h1>
    </div>
  );
}
