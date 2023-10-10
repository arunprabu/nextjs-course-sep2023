import Link from "next/link";

// Static Site Generation - SSG Demo
export default function Products(props: any) {
  console.log("Inside Products Component");
  console.log(props);

  return (
    <div className="flex min-h-screen flex-col items-center">
      <h1>All Products</h1>

      <ul>
        {props.productList.map( (product: any) => {
          return (
            <li key={product.id}>
              <Link href={`products/${product.id}`}>{product.name}</Link>
              <p>Rs: {product.price}</p>
              <hr/>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// Returning Static Site Generation related data
export async function getStaticProps() {
  console.log('Executed by Server');
  // can connect to db or can connect to rest api
  // and get the data and return it as props

  return {
    props: {
      productList: [
        { id: 1, name: "Bread", price: 50 },
        { id: 2, name: "Butter", price: 100 },
        { id: 3, name: "Jam", price: 60 },
        { id: 4, name: "Ghee", price: 120 },
        { id: 5, name: "Honey", price: 120 },
      ],
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}
