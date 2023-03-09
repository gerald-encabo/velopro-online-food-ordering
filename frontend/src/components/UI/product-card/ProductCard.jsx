import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../../store/shopping-cart/cartSlice'
import '../../../styles/product-card.scss'

const ProductCard = (props) => {

    const { id, title, image01, price } = props.item
    const dispatch = useDispatch()

    const addToCart = ()=> {
        dispatch(cartActions.addItem({
            id,
            title,
            image01,
            price,
        }))
    }

    return (
        <div className="product-card-item mt-4">
            <div className="product-card-img">
                <Link to={`/food/${id}`}>
                    <img src={image01} alt="product-card-img" className='product-card-img_solo w-50' />
                </Link>
            </div>
            <div className="product-card-content">
                <h5><Link to={`/food/${id}`}>{title}</Link></h5>
                <div className='d-flex align-items-center justify-content-between'>
                    <span className='product-card-price'>${price}</span>
                    <button className='universal_btn' onClick={addToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
  )
}
export default ProductCard