import { ListGroupItem } from "react-bootstrap"
import { useDispatch } from 'react-redux'
import { cartActions } from '../../../store/shopping-cart/cartSlice'
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import '../../../styles/cart-item.scss'

const CartItem = ({item}) => {

    const { id, title, price, image01, quantity, totalPrice } = item
    const dispatch = useDispatch()
    
    const incrementItem = () => {
        dispatch(cartActions.addItem({
            id,
            title,
            price,
            image01
        }))
    }

    const decrementItem = () => {
        dispatch(cartActions.removeItem(id))
    }

    const deleteItem = () => {
        dispatch(cartActions.deleteItem(id))
    }

    return (
        <ListGroupItem className="border-0 cart_item">
            <div className="cart-item-info d-flex gap-2">
                <img src={image01} alt="product-img" />
                <div className="cart-item-product_info w-100 d-flex align-items-center gap-4 justify-content-between">
                    <div className="cart-item-product_list">
                        <h6 className="cart-item-product_title">{title}</h6>
                        <p className="d-flex align-items-center gap-5 cart-item-product_price">
                            <h6>{quantity}x</h6> <span>${totalPrice}</span>
                        </p>
                        <div className='d-flex align-items-center justify-content-between cart-item-increase_decrease_btn'>
                            <span className='cart-item-increase_btn' onClick={incrementItem}>
                                <AiOutlinePlus />
                            </span>
                            <span className='cart-item-quantity'>{quantity}</span>
                            <span className='cart-item-decrease_btn' onClick={decrementItem}>
                                <AiOutlineMinus />
                            </span>
                        </div>
                    </div>
                </div>
                <span className='cart-item-delete_btn' onClick={deleteItem}>
                    <AiOutlineClose />
                </span>
            </div>
        </ListGroupItem>
    )
}
export default CartItem