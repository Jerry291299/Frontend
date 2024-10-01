import { useContext, useEffect, useState } from "react";
import { Cartcontext } from "./contexts/Context";
import { getCartByID, removeFromCart } from "../service/cart";
import { CartItem } from "../interface/cart";


const Cart = () => {
  const Globalstate = useContext(Cartcontext);
  const {state, dispatch} = Globalstate;
  const [userId, setUserId] = useState<string | null>(null)
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleRemove = async (item: CartItem) => {
    try {
      const updatedCart = await removeFromCart(userId as string, item.productId);
      setCartItems(updatedCart.items); // Update the local cart state after removal
      console.log(item.productId, "item id");
    } catch (error) {
      console.error("Failed to remove item:", error);
    }
  };

  
  
  useEffect(() => {
    const userData = sessionStorage.getItem("user");
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUserId(parsedUser.id); 
    }
  }, []);

  useEffect(() => {
    if(userId) {
      const fetchCartData = async () => {
        try {
          const data = await getCartByID(userId)
          if (data) {
            setCartItems(data.items)
          }
        }
        catch (error) {
          console.log(error);
          
        }
      }
      fetchCartData()
    }
  },[userId])

  const handleIncrease = (item: CartItem) => {
    const updatedItems = cartItems.map((cartItem) =>
      cartItem.productId === item.productId ? { ...cartItem, quantity: (cartItem.quantity ?? 0) + 1 } : cartItem
    );
    setCartItems(updatedItems);
  };

  const handleDecrease = (item: CartItem) => {
    if (item.quantity && item.quantity > 1) {
      const updatedItems = cartItems.map((cartItem) =>
        cartItem.productId === item.productId ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
      );
      setCartItems(updatedItems);
    } else {
      handleRemove(item);
    }
  };

  
  

  const total = cartItems.reduce((total, item) => {
    const quantity = item.quantity ?? 0;
    const price = item.price ?? 0;
    return total + price * quantity;
  }, 0);
  
 
  

  return (
    <div className="cart">
      <div className="flex justify-between">
      <h1>Shopping cart</h1>
     
        <div className="total pr-[200px]">
          <h2>Tong tien: </h2>
          <h2 className="pl-[20px]">{total} $</h2>
        </div>
      
      </div>
        
      {cartItems.map((item, index) => {
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
                onClick={() => handleIncrease(item)}>
                +
              </button>
              <p>{quantity}</p>
              <button
              className="rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300"
                onClick={() => handleDecrease(item)}>
                -
              </button>
            </div>
            <button className="pr-[30px] text-[39px]" onClick={() => handleRemove(item)}>
              x
            </button>
          </div>
        );
      })}
      
    </div>
  );
};

export default Cart;
