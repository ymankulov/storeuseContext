import React, { useContext, useState } from "react";
import { ProductContext } from "../../context";

const Basket = () => {
  const { basket, setBasket } = useContext(ProductContext);
  let totalPrice = basket.reduce((acc, el, idx, arr) => {
    return acc + +el.price * el.quantity;
  }, 0);

  const deleteBasket = (el) => {
    let filterBasket = basket.filter((item) => item.id !== el.id);
    setBasket(filterBasket);
    localStorage.setItem("basket", JSON.stringify(filterBasket));
  };
  const quenBas = (data) => {
    let chageBas = basket.map((el) =>
      el.id === data.id ? { ...el, quantity: el.quantity + 1 } : el
    );
    console.log(chageBas);
    setBasket(chageBas);
  };
  const quenBasket = (data) => {
    let chageBas = basket.map((el) =>
      el.id === data.id
        ? { ...el, quantity: el.quantity > 1 ? el.quantity - 1 : 1 }
        : el
    );
    console.log(chageBas);
    setBasket(chageBas);
  };
  const removeAll = () => {
    localStorage.removeItem("basket")
    setBasket([])

  }

  return (
    <div className="mt-[50px]">
      <div className="container">
        {basket.length ? (
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Img
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Quantity
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {basket.map((el) => (
                  <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <img src={el.url} alt="" width={120} />
                    </th>
                    <td class="px-6 py-4 text-[20px]">{el.title}</td>
                    <div
                      style={{
                        display: "flex",
                        marginTop: "70px",
                      }}
                      className="btn"
                    >
                      <button onClick={() => quenBasket(el)}>-</button>
                      <td class="px-6 py-4 text-[20px]">{el.quantity}</td>
                      <button onClick={() => quenBas(el)}>+</button>
                    </div>
                    <td class="px-6 py-4 text-[20px]">
                      ${el.price * el.quantity}
                    </td>
                    <td class="px-6 py-4">
                      <button
                        onClick={() => deleteBasket(el)}
                        type="button"
                        class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="py-[40px] flex items-center justify-between">
              <h1 className="text-white text-[40px]">
                Total Price: {totalPrice}$
              </h1>
              <button
              onClick={() => removeAll()}
                type="button"
                class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-2xl px-5 py-2.5 text-center me-2 mb-2"
              >
                Remove All
              </button>
            </div>
          </div>
        ) : (
          <div
            class="p-4 text-sm text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-gray-300"
            role="alert"
          >
            <span class="font-medium">Dark alert!</span> Change a few things up
            and try submitting again.
          </div>
        )}
      </div>
    </div>
  );
};

export default Basket;
