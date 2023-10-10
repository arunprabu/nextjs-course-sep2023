import Image from "next/image";
import { NextRouter, useRouter } from "next/router";

export default function ProductDetails(props: any) {
  const router: NextRouter = useRouter();
  // console.log(router);  // you can see entire stuff about router

  // console.log(router.pathname); // path for example: products/[productId]

  // to get URL params and query params try the following
  // console.log(router.query); // for ex: products/1

  console.log(props);

  return (
    <div className="bg-white">
      <div className="pt-6">
        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
            <Image
              src={props.product.image}
              alt="Two each of gray, white, and black shirts laying flat."
              className="h-full w-full object-cover object-center"
              width={200}
              height={250}
            />
          </div>
        </div>
        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {props.product.title}
            </h1>
          </div>
          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">Rs. {props.product.price}</p>
            
          </div>
          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>
              <div className="space-y-6">
                <p className="text-base text-gray-900">
                  {props.product.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Let's tell the system what dynamic dynamic pages should be pre-generated
export async function getStaticPaths() {
  // telling next.js, the dynamic pages should be pre-generated for product id 1, 2, 3

  // Call an external API endpoint to get products -- max 3 items
  const res = await fetch("https://fakestoreapi.com/products?limit=3");
  const products = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = products.map((product: any) => ({
    params: { productId: product.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return {
    paths: paths,
    fallback: false, // when true -- product id 4, will be generated upon request
    // when false, it will show 404 -- because product id 4 is not pre-generated
  };
}

// this gets called at build time -- when you try npm run build
export async function getStaticProps(context: any) {
  console.log(context); // we can get context related to this url
  // i can send a request to rest api to get data for product with id 1
  // 1. What's the REST API URL? https://fakestoreapi.com/products/1
  // 2. What's the Http Method? GET
  // 3. What's the REST API Client? fetch
  const res = await fetch(`https://fakestoreapi.com/products/${context.params.productId}`, {
    method: "GET",
  });
  const product = await res.json();

  return {
    props: {
      product: product
    },
  };
}

// try npm run build
// try npm start
