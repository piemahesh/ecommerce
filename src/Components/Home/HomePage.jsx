import { useContext } from "react"
import { ProductContext } from "../context/Mycontext"



export const HomePage = () => {
    const { products } = useContext(ProductContext)
    console.log(products)
    return (
        <section className="flex w-full max-w-screen-2xl flex-wrap items-center justify-evenly mx-auto">
            {
                products.map((product, i) => {
                    return (
                        <div key={i}>
                            <div>
                                <img src={product.img} alt={product.productName} />
                            </div>
                            <div>{product.productName}</div>
                            <div>{product.price}</div>
                        </div>
                    )
                })
            }
        </section>
    )
}
