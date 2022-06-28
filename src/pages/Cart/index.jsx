import { Header } from "../../components/Header"
import { OrderSummary } from "../../components/OrderSummary"
import { ProductCart } from "../../components/ProductCart"
import { ContainerProductsCart } from "./style"

import { useContext } from "react"
import { CartContext } from "../../providers/cart"

export const Cart = () => {
  const { cart } = useContext(CartContext)
  return (
    <>
      <Header />
      <>
        <OrderSummary />
        <ContainerProductsCart>
          <ul>
            {cart.map((product, index) => (
              <ProductCart key={index} product={product}></ProductCart>
            ))}
          </ul>
        </ContainerProductsCart>
      </>
    </>
  )
}
