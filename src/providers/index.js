import { ProductsProvider } from "./products"
import { CartProvider } from "./cart"

export const Providers = ({ children }) => {
  return (
    <ProductsProvider>
      <CartProvider>{children}</CartProvider>
    </ProductsProvider>
  )
}
