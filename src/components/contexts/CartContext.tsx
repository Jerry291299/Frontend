import { createContext, useEffect, useState } from "react";
import { getAllproducts } from "../../service/products"; // Adjust this to fetch all products

// Define the shape of the context
interface ShopContextType {
  cartItems: Record<number, number>;
  addToCart: (itemId: number) => void;
  removeFromCart: (itemId: number) => void;
  updateCartItemCount: (newAmount: number, itemId: number) => void;
  getTotalCartAmount: () => number;
  checkout: () => void;
}

// Create the context with an empty default value
export const ShopContext = createContext<ShopContextType | null>(null);

const getDefaultCart = (products: any[]) => {
  let cart: Record<number, number> = {};
  products.forEach((product) => {
    cart[product.id] = 0;
  });
  return cart;
};

export const ShopContextProvider = (props: { children: React.ReactNode }) => {
  const [products, setProducts] = useState<any[]>([]);
  const [cartItems, setCartItems] = useState<Record<number, number>>({});

 
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getAllproducts(); 
        setProducts(productsData);
        setCartItems(getDefaultCart(productsData)); 
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    };
    fetchProducts();
  }, []);

  const getTotalCartAmount = () => {
    let total = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = products.find((product) => product.id === Number(item));
        if (itemInfo) {
          total += cartItems[item] * itemInfo.price;
        }
      }
    }
    return total;
  };

  const addToCart = (itemId: number) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0,
    }));
  };

  const updateCartItemCount = (newAmount: number, itemId: number) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: newAmount,
    }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart(products)); // Reset the cart
  };

  const contextValue: ShopContextType = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
