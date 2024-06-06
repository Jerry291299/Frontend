import React from 'react'
import { axiosservice } from '../config/API'
import { IProductLite } from '../interface/products';

export const getAllproducts = async () => {
  try{
    const {data} = await axiosservice.get('product')
    console.log(data);
    return data    
  } catch (error) {
    console.log(error);
  }
}

export const addProduct = async(product:IProductLite) => {
    try {
        const { data } = await axiosservice.post('product/add', product)
        return data
} catch (error) {
    console.log(error);
    
}
}

export const updateProduct = async(id?:string,   product?: IProductLite) => {
  try {
    const {data} = await axiosservice.put(`/product/${id}`, product)
    return data
  } catch (error) {
    console.log(error);
    
  }
}

export const DeleteProduct = async(pid:string)=> {
  try{
    const{data} = await axiosservice.delete(`/product/${pid}`)
    return data
  } catch (error){
    console.log(error);
    
  }
}
