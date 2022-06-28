import { ButtonStyle } from "./style"
import { useContext } from "react"
import { CartContext } from "../../providers/cart"

export const Button = ({ type, text, item, icon }) => {
  const { addCart, removeCart, finishOrder } = useContext(CartContext)

  const handleClick = () => {
    if (type === "addCart") {
      addCart(item)
    } else if (type === "removeCart") {
      removeCart(item)
    } else if (type === "finish") {
      finishOrder()
    }
  }

  return (
    <ButtonStyle onClick={handleClick}>
      {text}
      {icon}
    </ButtonStyle>
  )
}
