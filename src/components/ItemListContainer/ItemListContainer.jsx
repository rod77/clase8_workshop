import { useEffect, useState } from "react"
import { listadoProdutos } from "../../data/asyncMock"
import { ItemList } from "../ItemList/ItemList"

export const ItemListContainer = ({ greetings }) => {

    const [productos, setProductos] = useState([])

    const getProducts = () => {
        return new Promise((resolve,reject)=>{
            setTimeout( ()=>{
            listadoProdutos.length>0 ? resolve(listadoProdutos)
                                     : reject('No hay productos')
            },2000)
        }
        )
    }

    useEffect(() => {
        getProducts().then((respuesta)=>setProductos(respuesta))
    }, [])

    return (
        <>
            <div>{greetings}</div>
            <ItemList productosAmostrar={productos} />
        </>
    )

    
}
