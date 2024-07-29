import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { changeQuantity } from "../redux/slices/cartSlice";

function Cart() {
  const cartItems = useSelector((reduxStore) => {
    return reduxStore.cart.value;
  });

  const dispatch = useDispatch();

  return (
    <div>
      <div className="w-full">
        <div className="w-full bg-[#F6F5FF] flex py-3 flex-col">
          <p className="text-[22px] container font-bold">My Account</p>
          <div className="container text-[12px] flex gap-2">
            <Link to="/">Home.</Link>
            <p>Pages.</p>
            <p className="text-[#FB2E86]">My Account</p>
          </div>
        </div>

        <div className="container py-16 flex justify-between">
          <div className="w-[62%] text-[16px] font-semibold">
            <div className="flex text-[#1D3178]">
              <h2 className="w-[40%] mb-5">Product</h2>
              <ul className="flex justify-between w-[55%] mb-5">
                <li>Price</li>
                <li>Quantity</li>
                <li>Total</li>
              </ul>
            </div>

            {cartItems.map((cart, index) => {
              return (
                <div
                  key={index}
                  className="w-full flex justify-between text-[12px] text-[#15245E]"
                >
                  <div className="w-[40%] bg-cover mb-5 h-32 flex">
                    <img
                      src={cart.image}
                      alt="product image"
                      className="h-full w-[60%] mr-3"
                    />
                    <div>
                      <p className="mb-6">{cart.name}</p>
                      <p className="mb-6 text-[#A1A8C1] text-[10px]">
                        Color: Brown
                      </p>
                      <p className="mb-6 text-[#A1A8C1] text-[10px]">
                        Size: XL
                      </p>
                    </div>
                  </div>
                  <ul className="flex justify-between w-[55%]">
                    <li>{cart.price}</li>
                    <li className="flex gap-3">
                      <CiCircleMinus
                        className="text-lg cursor-pointer"
                        onClick={()=> dispatch(
                          changeQuantity({
                            _id: cart._id,
                            type: "decrement",
                          })
                        )}
                      />
                      {cart.quantity}
                      <CiCirclePlus
                        className="text-lg cursor-pointer"
                        onClick={()=> dispatch(
                          changeQuantity({
                            _id: cart._id,
                            type: "increment",
                          })
                        )}
                      />
                    </li>
                    <li>${cart.price * cart.quantity}</li>
                  </ul>
                  <hr />
                </div>
              );
            })}

            {/* mapping of products added in the cart exists here */}

            <div className="flex justify-between text-sm py-10">
              <button className="bg-[#FB2E86] text-white px-3 py-2">
                Update Cart
              </button>
              <button className="bg-[#FB2E86] text-white px-3 py-2">
                Clear Cart
              </button>
            </div>
          </div>

          <div className="w-[30%] text-[#1D3178]">
            <h2 className="text-center text-[16px] font-semibold mb-5">
              Cart Tools
            </h2>
            <div className="w-full bg-[#E8E6F1] px-7 py-6 mb-10">
              <div className="flex justify-between text-sm py-2">
                <p>Subtotals:</p>
                <p>£219.00</p>
              </div>
              <hr />

              <div className="flex justify-between text-sm py-2">
                <p>Totals:</p>
                <p>£325.00</p>
              </div>
              <div className="flex gap-1 my-3">
                <input type="checkbox" />
                <p className="text-[10px] text-[#8A91AB]">
                  Shipping & taxes calculated at checkout
                </p>
              </div>

              <button className="w-full text-center py-2 bg-[#19D16F] text-white font-semibold my-3">
                Proceed To Checkout
              </button>
            </div>
            <h2 className="text-center text-[16px] font-semibold mb-5">
              Calculate Shopping
            </h2>

            <div className="w-full bg-[#E8E6F1] px-7 py-8 text-[12px]">
              <input
                type="text"
                placeholder="Nepal"
                className=" w-full bg-transparent border-b-[2px] border-gray-300 mb-8"
              />
              <input
                type="text"
                placeholder="Kathmandu - 4500"
                className=" w-full bg-transparent border-b-[2px] border-gray-300 mb-8"
              />
              <input
                type="text"
                placeholder="Postal Code"
                className=" w-full bg-transparent border-b-[2px] border-gray-300 mb-8"
              />

              <button className="bg-[#FB2E86] text-sm font-semibold text-white px-3 py-2">
                Calculate Shiping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
