import { useState, useEffect, useRef } from 'react'
import { Product, onChangeArgs } from '../interfaces/interfaces';

interface useProductArgs {
  product: Product;
  onChange?: ( args: onChangeArgs) => void, 
  value?: number 
}

export const useProduct = ( { onChange, product, value = 0 }: useProductArgs  ) => {

    const [counter, setCounter] = useState(value);

    // se usa un useRef pq de esta manera no hay que redibujar los componentes en caso de que cambie 
    // para saber si está controlado lo que hay que hacer es saber si tengo algun valor en el onChange
    // pero si lo dejamos useRef(onChange) va a tener undefined o toda la función, pero no queremos la función 
    // queremos un true o un  false, podemos transformarlo mediante !!onChange , si lo dejamos !onChange significaria si no existe el onchange
    // con !! estariamos haciendo la negación del false entonces sería true     
    // ahora isControlled va a tener un valor boolean 
    const isControlled = useRef( !!onChange )

    const increaseBy =  ( value: number ) => {
      if( isControlled.current ) {
        // cuando le ponemos ! en la función es para decirle a typescript que va a existir onChange 
        return onChange!({count: value, product })
      }
        const newValue = Math.max( counter + value, 0)
        setCounter( newValue);
        onChange && onChange({count: newValue, product });
    }

    useEffect(() => {
      setCounter(value)
    }, [value])
    
    
  return {
    counter, 
    increaseBy
  }
    
}
