import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap"
import Helmet from '../components/helmet/Helmet'
import BannerSection from '../components/UI/banner-section/BannerSection'
import { cartActions } from '../store/shopping-cart/cartSlice'
import '../styles/checkout.scss'

const Checkout = () => {

  const cartTotalAmount = useSelector(state => state.cart.totalAmount)
  const cartItems = useSelector(state => state.cart.cartItems)

  const deliveryCost = 2
  const taxCost = 1.13
  const totalAmount = (cartTotalAmount + deliveryCost) * taxCost
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const [enterName, setEnterName] = useState('')
  const [enterEmail, setEnterEmail] = useState('')
  const [enterPhoneNumber, setEnterPhoneNumber] = useState('')
  const [enterAddress, setEnterAddress] = useState('')
  const [enterPostalCode, setEnterPostalCode] = useState('')
  const [enterCity, setEnterCity] = useState('')
  const deliveryInfo = []

  const deleteItem = () => {
      cartItems.map((item) => {
        dispatch(cartActions.deleteItem(item.id))
        return true
      })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    const userDeliveryAddress = {
      name: enterName,
      email: enterEmail,
      phone: enterPhoneNumber,
      address: enterAddress,
      postalcode: enterPostalCode,
      city: enterCity
    }
    deliveryInfo.push(userDeliveryAddress)
    console.log(deliveryInfo)

    // Remove all item in the cart
    deleteItem()

    // Redirect to homepage
    navigate('/home')
  }

  return (
    <>
    {
      cartTotalAmount !== 0 
      ? <Helmet title='Checkout'>
          <BannerSection title='Checkout'/>
          <section>
            <Container className="checkout">
              <Row>
                <Col lg='8' md='6'>
                  <h6 className="mb-4">Delivery Address</h6>
                  <form className="checkout-form" onSubmit={submitHandler}>
                    <div className="checkout-form_group">
                      <input 
                        type="text"  
                        placeholder="Enter your name" 
                        onChange={(e) => setEnterName(e.target.value)}
                        required 
                      />
                    </div>
                    <div className="checkout-form_group">
                      <input 
                        type="email" 
                        placeholder="Enter your email"
                        onChange={(e) => setEnterEmail(e.target.value)}
                        required 
                      />
                    </div>
                    <div className="checkout-form_group">
                      <input 
                        type="tel"  
                        placeholder="Phone number"
                        onChange={(e) => setEnterPhoneNumber(e.target.value)}
                        required
                      />
                    </div>
                    <div className="checkout-form_group">
                      <input 
                        type="text" 
                        placeholder="Address" 
                        onChange={(e) => setEnterAddress(e.target.value)}
                        required
                      />
                    </div>
                    <div className="checkout-form_group">
                      <input 
                        type="text" 
                        placeholder="Postal code" 
                        onChange={(e) => setEnterPostalCode(e.target.value)}
                        required
                      />
                    </div>
                    <div className="checkout-form_group">
                      <input 
                        type="city" 
                        placeholder="City" 
                        onChange={(e) => setEnterCity(e.target.value)}
                        required
                      />
                    </div>
                    <button className="universal_btn mb-4">Payment</button>
                  </form>
                </Col>
                <Col lg='4' md='6'>
                  <div className="checkout-bill mt-5">
                    <h6 className="d-flex align-items-center justify-content-between mb-2">
                      SubTotal: <span>${Number(cartTotalAmount).toFixed(2)}</span>
                    </h6>
                    <h6 className="d-flex align-items-center justify-content-between mb-2">
                      Delivery: <span>${deliveryCost}</span>
                    </h6>
                    <h6 className="d-flex align-items-center justify-content-between mb-2">
                      Tax: <span>${Number((cartTotalAmount * taxCost) - cartTotalAmount).toFixed(2)}</span>
                    </h6>
                    <div className="checkout-total">
                      <h4 className="d-flex align-items-center justify-content-between">
                        Total: <span>${Number(totalAmount).toFixed(2)}</span>
                      </h4>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
        </section>
        </Helmet>
      : navigate('/foods')
    }
    </>
  )
}
export default Checkout