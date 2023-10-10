import Image from "next/image";
import Link from "next/link";

// Static Site Generation - SSG Demo
export default function Products(props: any) {
  console.log("Inside Products Component");
  console.log(props);

  return (
    <div className="flex flex-col">
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Products
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {props.productList.map((product: any) => {
              return (
                <div className="group relative" key={product.id}>
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <Image
                      src={product.image}
                      alt="Front of men's Basic Tee in black."
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      width={100}
                      height={200}
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <Link href={`products/${product.id}`}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.title}
                        </Link>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      Rs. {product.price}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// Returning Static Site Generation related data
export async function getStaticProps() {
  console.log("Executed by Server");
  // can connect to db or can connect to rest api
  // and get the data and return it as props
  // 1. What's the REST API URL? https://fakestoreapi.com/products
  // 2. What's the Http Method? GET
  // 3. What's the REST API Client? fetch
  const res = await fetch("https://fakestoreapi.com/products", {
    method: 'GET'
  });
  const products = await res.json();

  return {
    props: {
      productList: products,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}
