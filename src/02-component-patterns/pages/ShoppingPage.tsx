import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";

import "../styles/custom-style.css"


export const ShoppingPage = () => {

    const { shoppingCart, onProductCountChange } = useShoppingCart()
    
  return (
    <div >
        <h1>Shopping store</h1>
        <hr/>
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }} >
            {/* <ProductCard product={ product } >
                <ProductCard.Image />
                <ProductCard.Title title={ ''} />
                <ProductCard.Buttons increaseBy={function (value: number): void {
                      throw new Error("Function not implemented.")
                  } } counter={0} />           
            </ProductCard> */}
            
           {/* <ProductCard 
                product={ product } 
                className="bg-dark text-white"

            >
                <ProductCard.Image  className="custom-image" />
                <ProductCard.Title title={ ' hola mundo '} className="text-bold" />
                <ProductCard.Buttons className="custom-buttoms"/>           
            </ProductCard>*/}
            {
                products.map( product1 => 
                    
                <ProductCard 
                    key={ product1.id }
                    product={ product1 }    
                    className="bg-dark text-white"
                    onChange={ onProductCountChange } 
                    value={ shoppingCart[product1.id]?.count || 0 }

                >
                    <ProductImage className="custom-image" />
                    <ProductTitle className="text-bold" />
                    <ProductButtons className="custom-buttoms" />           
                </ProductCard>

                ) 
            }

        </div>
        <div className="shopping-cart">
            {            
                Object.entries(shoppingCart).map(([key,product]) => (
                    <ProductCard 
                         key={ key }
                        product={ product }    
                        className="bg-dark text-white" 
                        style={{ width: '100px'}}
                        onChange={ onProductCountChange }
                        value={ product.count }
                    >
                        <ProductImage className="custom-image" />
                        <ProductButtons 
                            className="custom-buttoms" 
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}

                        />           
                    </ProductCard>                    
                ))
                
            }          

        </div>
      
    </div>
  )
}
