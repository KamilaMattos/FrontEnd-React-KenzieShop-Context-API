import { CardProduct } from "../../components/CardProduct"
import { Header } from "../../components/Header"
import { ContainerProducts } from "./style"

import { useContext } from "react"
import { ProductsContext } from "../../providers/products"

export const Home = () => {
  const { products } = useContext(ProductsContext)

  return (
    <>
      <Header />
      <ContainerProducts>
        <ul>
          {products.map((product, index) => (
            <CardProduct key={index} product={product}></CardProduct>
          ))}
        </ul>
      </ContainerProducts>
    </>
  )
}
