import CartItem from "./CartItem"
import { ListGroup } from "reactstrap"
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { cartUiActions } from '../../../store/shopping-cart/cartUiSlice'
import '../../../styles/shopping-cart.scss'

const Carts = () => {

    const dispatch = useDispatch()
    const cartProducts = useSelector(state => state.cart.cartItems)
    const totalAmount = useSelector(state => state.cart.totalAmount)

    const toggleCart = () => {
        dispatch(cartUiActions.toggle())
    }

    return (
        <div className="cart">
            <ListGroup className="cart-container">
                <div className="cart-close mt-3">
                    <span onClick={toggleCart}>
                        <AiOutlineClose />
                    </span>
                </div>
                    
                <div className="cart-item_list">
                    {
                        cartProducts.length === 0 ? <h6 className="text-center mt-5">No item added to the cart</h6> : cartProducts.map((item, index) => (
                            <CartItem item={item} key={index} />
                        ))
                    }                    
                </div>

                <div className="cart-bottom d-flex align-items-center justify-content-between">
                    <h6>Subtotal: <span>${totalAmount}</span></h6>
                    <button onClick={toggleCart}><Link to='/checkout'>Checkout</Link></button>
                </div>

            </ListGroup>
        </div>
    )
}
export default Carts