import Link from "next/link";
import { useState } from "react";

export default function Products() {
  console.log('Inside Products Component');

  const [productList, setProductList] = useState([
    { id: 1, name: "Bread", price: 50 },
    { id: 2, name: "Butter", price: 100 },
    { id: 3, name: "Jam", price: 60 },
    { id: 4, name: "Ghee", price: 120 },
    { id: 5, name: "Honey", price: 90 },
  ]);

  return (
    <div className="flex min-h-screen flex-col items-center">
      <h1>All Products</h1>

      <ul>
        {productList.map(product => {
          return (
            <li key={product.id}>
              <Link href="products/1">{product.name}</Link>
              <p>Rs: {product.price}</p>
              <hr/>
            </li>
          );
        })}
        
      </ul>
    </div>
  );
}

