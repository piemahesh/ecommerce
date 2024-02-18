import { useContext } from "react"
import { ProductContext } from "../context/Mycontext"



export const HomePage = () => {
    const { products } = useContext(ProductContext)
    console.log(products)
    return (
        <div>HomePage</div>
    )
}
