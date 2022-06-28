import { OrderSummaryStyle } from "./style"
import { BsCartCheck } from "react-icons/bs"
import { Button } from "../Button"
import { useContext } from "react"
import { CartContext } from "../../providers/cart"

export const OrderSummary = () => {
  const { cart, finishOrder } = useContext(CartContext)

  const totalPrice = cart.reduce((acc, cur) => acc + cur.price, 0)

  return (
    <OrderSummaryStyle>
      <div>
        <p>Resumo da sua compra</p>
      </div>
      <span>
        Total:
        {totalPrice.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </span>
      <Button
        type='finish'
        text='Finalizar'
        icon={<BsCartCheck size={15} />}
        onClick={finishOrder}
      />
    </OrderSummaryStyle>
  )
}
