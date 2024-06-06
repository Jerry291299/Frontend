export interface Iproduct{
    _id: string,
    Name: string,
    Img: string,
    Price: number,
    Category: string,
}
export type IProductLite = Pick<Iproduct,'Name'| 'Img' | 'Price'|'Category' >