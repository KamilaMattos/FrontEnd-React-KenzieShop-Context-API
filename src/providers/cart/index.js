import { createContext, useState } from "react"
import { useHistory } from "react-router-dom"
import { toast } from "react-toastify"

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const initialState = JSON.parse(localStorage.getItem("cart")) || []
  const [cart, setCart] = useState(initialState)

  const history = useHistory()

  const addCart = (product) => {
    localStorage.setItem("cart", JSON.stringify([...cart, product]))
    setCart([...cart, product])
    toast.success("Produto adicionado ao carrinho!")
  }

  const removeCart = (product) => {
    const indexProduct = cart.findIndex((item) => item === product)
    const remove = cart.filter((product, index) => index !== indexProduct)
    localStorage.setItem("cart", JSON.stringify(remove))
    setCart(remove)
    toast.success("Produto removido do carrinho!")
  }

  const finishOrder = () => {
    setCart([])
    localStorage.removeItem("cart")
    history.push("/")
    toast.success("Compra finalizada!")
  }

  return (
    <CartContext.Provider value={{ cart, addCart, removeCart, finishOrder }}>
      {children}
    </CartContext.Provider>
  )
}
