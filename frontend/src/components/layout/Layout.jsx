import Header from "../header/Header"
import Footer from "../footer/Footer"
import Routers from "../../routes/Routers"
import Carts from "../UI/cart/Carts"
import { useSelector } from "react-redux"

const Layout = () => {

  const showCart = useSelector(state => state.cartUi.cartIsVisible)
  
  return (
      <div>
          <Header />
          {
            showCart && <Carts />
          }
          <Routers />
          <Footer />
      </div>
  )
}
export default Layout