export interface Product {
    id: string
    url: string
    name: string
    size: string
    color: string
    price: number
}

export interface ShoppingCartItem {
    id: string
    quantity: number
}