import { Item } from "../Item/Item"

export const ItemList = ({productosAmostrar}) => {

  return (
    <>
    {
        productosAmostrar.map( p => 
                        <Item key={p.id} 
                            name={p.name} 
                            category={p.category} 
                            img={p.img} 
                            price={p.price} /> )
    }
    </>
  )
}



