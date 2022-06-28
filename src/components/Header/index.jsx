import { BsCart2 } from "react-icons/bs"
import { Link } from "react-router-dom"
import { HeaderStyle } from "./style"

import { useContext } from "react"
import { CartContext } from "../../providers/cart"

export const Header = () => {
  const { cart } = useContext(CartContext)

  return (
    <HeaderStyle>
      <Link to='/'>
        <h1>Kenzie Shop</h1>
      </Link>
      <div>
        <Link to='/cart'>
          <BsCart2 size={30} color='white' />
        </Link>
        <span>{cart.length}</span>
      </div>
    </HeaderStyle>
  )
}
