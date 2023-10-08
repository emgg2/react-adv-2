import { ProductCard as ProductCardHOC } from './ProductCard';

import { ProductTitle } from './ProductTitle';
import { ProductButtons } from "./ProductButtons";
//import { ProductCard } from "./ProductCard";
import { ProductImage } from "./ProductImage";
import { ProductCardHOCProps } from '../interfaces/interfaces';

export { ProductTitle } from './ProductTitle';
export { ProductButtons } from "./ProductButtons";
//export { ProductCard } from "./ProductCard";
export { ProductImage } from "./ProductImage";

export const ProductCard: ProductCardHOCProps  =  Object.assign( ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons

})
export default ProductCard; 