import { Button } from "../Button"

import { BsCartX } from "react-icons/bs"
import { LiCartStyled } from "./style"

export const ProductCart = ({ product }) => {
  return (
    <LiCartStyled>
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
        type='removeCart'
        text='Remover'
        icon={<BsCartX size={15} />}
        item={product}
      />
    </LiCartStyled>
  )
}
