import { BsCartPlusFill } from "react-icons/bs"
import { LiStyled } from "./style"
import { Button } from "../Button"

import { useContext } from "react"
import { CartContext } from "../../providers/cart"

export const CardProduct = ({ product }) => {
  const { addCart } = useContext(CartContext)

  return (
    <LiStyled>
      <img src={product.img} alt={product.name} />
      <h2>{product.name}</h2>
      <div>
        <span>{product.category}</span>
      </div>
      <p>
        {product.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
      <Button
        text='Adicionar'
        icon={<BsCartPlusFill size={15} />}
        type='addCart'
        item={product}
        onClick={addCart}
      />
    </LiStyled>
  )
}
