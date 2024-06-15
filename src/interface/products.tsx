export interface Iproduct{
    _id: string,
    name: string,
    img: string,
    price: number,
    category: string,
}
export type IProductLite = Pick<Iproduct,'name'| 'img' | 'price'|'category' >