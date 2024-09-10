import { axiosservice } from '../config/API'
import { Icart } from '../interface/cart';

export const addtoCart = async(cart:Icart) => {
  try {
      const { data } = await axiosservice.post('cart/add', cart)
      return data
} catch (error) {
  console.log(error);
  
}
}

