import { Switch, Route } from "react-router-dom"
import { Home } from "../pages/Home"
import { Cart } from "../pages/Cart"

export const Routes = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/cart'>
        <Cart />
      </Route>
    </Switch>
  )
}