import { useContext } from "react";
import { Cartcontext } from "./contexts/Context";


const Cart = () => {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;

  const total = state.reduce((total, item) => {
    
    return total + item.price * item.quantity;
  }, 0);
  return (
    <div className="cart">
        <h1>test cart</h1>
      {state.map((item, index) => {
          const quantity = item.quantity ?? 0;
          const price = item.price ?? 0;
        return (
        

          <div className="card border-2 flex items-center justify-between w-50 mb-4" key={index}>
            <img className="max-lg:w-full lg:w-[180px] rounded-lg object-cover" src={item.img} alt="" />
            <p className="font-manrope font-bold text-2xl leading-9 text-gray-900">{item.name}</p>
            <p className="text-indigo-600 font-manrope font-bold text-2xl leading-9 text-right">{price} $</p>
            <div className="quantity">
              <button
              className="rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300"
                onClick={() => dispatch({ type: "INCREASE", payload: item })}>
                +
              </button>
              <p>{quantity}</p>
              <button
              className="rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300"
                onClick={() => {
                  if (quantity > 1) {
                    dispatch({ type: "DECREASE", payload: item });
                  } else {
                    dispatch({ type: "REMOVE", payload: item });
                  }
                }}>
                -
              </button>
            </div>
            <button className="pr-[30px] text-[39px]" onClick={() => dispatch({ type: "REMOVE", payload: item })}>
              x
            </button>
          </div>
        );
      })}
      {state.length > 0 && (
        <div className="total flex">
          <h2>Tong tien: </h2>
          <h2 className="pl-[20px]">{total} $</h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
