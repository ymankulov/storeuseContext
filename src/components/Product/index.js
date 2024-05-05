import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../context";
import ProductCard from "../ProductCard";

const Product = () => {
  const [sort, setSort] = useState("");
  let { product, setProduct } = useContext(ProductContext);

  const sortProduct = () => {
    if (sort === "cheap") {
      setProduct(product.sort((a, b) => b.price - a.price));
    } else if (sort === "expensive") {
      setProduct(product.sort((a, b) => a.price - b.price));
    }else if (sort === "A-Z") {
      setProduct(product.sort((a, b) => b.title.localeCompare (a.title)));
    }else if (sort === "Z-A") {
      setProduct(product.sort((a, b) => a.title.localeCompare (b.title)));
    }
  };

  return (
    <div id="product">
      <div className="container">
        <div className="">
          <select
            onChange={(e) => {
              setSort(e.target.value);
              sortProduct();
            }}
            className="bg-gray-50 border w-[20%] mt-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="expensive">Expensive</option>
            <option value="cheap">Cheap</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
          </select>
          <div className="flex items-center flex-wrap gap-[60px] my-10">
            {product.map((el, idx) => (
              <ProductCard el={el} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
