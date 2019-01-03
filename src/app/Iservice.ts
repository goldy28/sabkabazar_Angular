export interface Ibanner{
    bannerImageUrl:string,
    bannerImageAlt:string,
    isActive:boolean,
    order:number,
    id:string
}
export interface Iproduct{
    name:string,
    imageURL:string,
    description:string,
    price:number,
    stock:number,
    category:string,
    sku:string
    id:string
}
export interface Icategory{
    name:string,
    key:string,
    description:string,
    enabled:boolean,
    order:number,
    imageUrl:string,
    id:string
}