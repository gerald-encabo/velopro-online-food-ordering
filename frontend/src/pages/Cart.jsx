import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import { BsTrash } from 'react-icons/bs'
import { cartActions } from '../store/shopping-cart/cartSlice'
import { Link } from 'react-router-dom'
import Helmet from '../components/helmet/Helmet'
import CommonSection from '../components/UI/banner-section/BannerSection'
import '../styles/cart-page.scss'

const Cart = () => {

  const cartItems = useSelector(state => state.cart.cartItems)
  const totalAmount = useSelector(state => state.cart.totalAmount)

  return (
    <Helmet title='Cart'>
      <CommonSection title='Your Cart' />
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              {
                cartItems.length === 0 
                ? <h5 className='text-center'>Your cart is empty</h5> 
                : <table className='table table-bordered'>
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Product Title</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        cartItems.map((item, index) => <Tr item={item} key={index} />)
                      }
                    </tbody>
                  </table>
              }
              {
                totalAmount !== 0 
                ? <div className='mt-4'>
                    <h6>Subtotal: <span className='cart-subtotal'>${totalAmount}</span></h6>
                    <p>Taxes and delivery will calculate at the checkout</p>
                    <div className='cart-page_btn'>
                      <button className='universal_btn me-4'><Link to='/foods'>Continue Shopping</Link></button>            
                      <button className='universal_btn'><Link to='/checkout'>Proceed to checkout</Link></button>
                    </div>
                  </div>
                : ''
              }
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

const Tr = (props) => {

  const { id, image01, title, price, quantity } = props.item
  const dispatch = useDispatch()

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id))
  }

  return (
      <tr>
        <td className='text-center cart-img_box'><img src={image01} alt="order item"/></td>
        <td className='text-center'>{title}</td>
        <td className='text-center'>${price}</td>
        <td className='text-center'>{quantity}</td>
        <td className='text-center cart-item_del'>
          <BsTrash onClick={deleteItem}/>
        </td>
      </tr>
  )
}

export default Cart