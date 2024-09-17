import { useContext } from "react";
import { Cartcontext } from "./contexts/Context";


const Cart = () => {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;

  const total = state.reduce((total, item) => {
    const quantity = item.quantity ?? 0;  
    const price = item.price ?? 0;
    return total + item.price * item.quantity;
  }, 0);
  return (
    <div className="cart">
        <h1>test cart</h1>
      {state.map((item, index) => {
          const quantity = item.quantity ?? 0;
          const price = item.price ?? 0;
        return (
          <div className="card border-2 flex items-center justify-between w-full mb-4" key={index}>
            <img className="scale-50 w-50" src={item.img} alt="" />
            <p>{item.name}</p>
            <p>{price}</p>
            <div className="quantity">
              <button
                onClick={() => dispatch({ type: "INCREASE", payload: item })}>
                +
              </button>
              <p>{quantity}</p>
              <button
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
            <h2 onClick={() => dispatch({ type: "REMOVE", payload: item })}>
              x
            </h2>
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
