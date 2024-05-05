import React, { useContext, useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { FaHeart } from "react-icons/fa";
import { ProductContext } from "../../context";
import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ el }) => {
  const { basket, setBasket } = useContext(ProductContext);
  const { favorite, setFavorite } = useContext(ProductContext);
  const nav = useNavigate();
  const someFavorite = favorite.some((ell) => ell.id === el.id);
  const someBas = basket.some((ell) => ell.id === el.id);
  const addToFavorite = (data) => {
    let findFavorite = favorite.find((item) => item.id === data.id);
    if (findFavorite) {
      let filterFavorite = favorite.filter((item) => item.id !== data.id);
      setFavorite(filterFavorite);
      localStorage.setItem("favorite", JSON.stringify(filterFavorite));
    } else {
      setFavorite([...favorite, data]);
      localStorage.setItem("favorite", JSON.stringify([...favorite, data]));
    }
  };
  const basketProduct = (data) => {
    setBasket([...basket, data]);
    localStorage.setItem("basket", JSON.stringify([...basket, data]))
  };

  console.log(basket, "bas");
  return (
    <div className="w-full max-w-[350px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Zoom>
        <img className="p-8 rounded-t-lg" src={el.url} alt="product image" />
      </Zoom>
      <div className="px-5 pb-5">
        <Link to={`/productDetails/${el.id}`}>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {el.title}
          </h5>
        </Link>
        <div className="flex items-center mt-2.5 mb-5 justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
              5.0
            </span>
          </div>
          <a
            onClick={() => {
              addToFavorite(el);
            }}
            style={{ color: someFavorite ? "red" : "white" }}
            className="text-white text-3xl"
          >
            <FaHeart />
          </a>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {el.price}$
          </span>

          <a
            onClick={someBas ? () => nav("/basket") : () => basketProduct(el)}
            className={`text-white cursor-pointer ${someBas ? "bg-orange-600" : "bg-blue-600"}  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
          >
            {someBas ? "Go to basket" : "Add to cart"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
