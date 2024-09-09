import { IUserCart } from "./user";

export interface Icart {
    userId: IUserCart,
    items:[
        {
            productId: string,
            quantity:  number,
        }
    ]
}
export type ICartLite = Pick<Icart,'userId' | 'items' >