import { axiosservice } from '../config/API';
import { Icart } from '../interface/cart';

// Function to add an item to the cart
export const addtoCart = async (cart: Icart) => {
  try {
    const { data } = await axiosservice.post('cart/add', cart);
    return data; 
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error; 
  }
};

export const getCartByID = async (id?: string) => {
  if (!id) {
    console.error("No ID provided for fetching cart");
    return null; 
  }

  try {
    const { data } = await axiosservice.get(`/cart/${id}`);
    return data;
  } catch (error) {
    console.error("Error fetching cart by ID:", error);
    throw error;
  }
};