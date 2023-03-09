import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { cartActions } from '../store/shopping-cart/cartSlice.js'
import Helmet from '../components/helmet/Helmet'
import BannerSection from '../components/UI/banner-section/BannerSection'
import ProductCard from '../components/UI/product-card/ProductCard'
import products from '../assets/Data.js'
import TestimonialSlider from '../components/UI/slider/TestimonialSlider'
import '../styles/product-details.scss'

const FoodDetails = () => {

  const [tab, setTab] = useState('desc')
  const [enteredName, setEnteredName] = useState('')
  const [enteredEmail, setEnteredEmail] = useState('')
  const [reviewMsg, setReviewMsg] = useState('')
  const {id} = useParams()
  const dispatch = useDispatch()

  const product = products.find(product => product.id === id)
  const { title, price, category, desc, image01 } = product
  const [previewImg, setPreviewImg] = useState(product.image01)

  const relatedProduct = products.filter(item => category === item.category)

  const addItem = () => {
      dispatch(cartActions.addItem({
          id,
          title,
          image01,
          price,
      }))
  }

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(enteredName, enteredEmail, reviewMsg)
  }

  useEffect(() => {
    setPreviewImg(product.image01)
  }, [product])

  useEffect(() => {
    window.scrollTo(0,0)
  }, [product])


  return (
    <Helmet title='Food Details'>
      <BannerSection title={category}/>
      <section>
        <Container>
          <Row>
            <Col lg='2' md='2'>
              <div className="food-details-product_images">
                <div className="food-details-img_item mb-3" onClick={() => setPreviewImg(product.image01)}>
                  <img src={product.image01} alt="" className='w-50'/>
                </div>
                <div className="food-details-img_item mb-3" onClick={() => setPreviewImg(product.image02)}>
                  <img src={product.image02} alt="" className='w-50'/>
                </div>
                <div className="food-details-img_item mb-3" onClick={() => setPreviewImg(product.image03)}>
                  <img src={product.image03} alt="" className='w-50'/>
                </div>
              </div>
            </Col>
            <Col lg='4' md='4'>
              <div className="food-details-product_main_img">
                <img src={previewImg} alt="" className='w-100' />
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className="food-details-single_product_content">
                <h2 className="food-details-product_title">{title}</h2>
                <p className="food-details-product_price">
                  Price: <span>${price}</span>
                </p>
                <p className='category mb-5'>
                  Category: <span>{category}</span>
                </p>
                <button className='universal_btn' onClick={addItem}>Add to cart</button>
              </div>
            </Col>
            <Col lg='12'>
              <div className="food-details-tabs d-flex align-items-center gap-5 py-3">
                <h6 
                  className={` ${ tab === 'desc' ? 'food-details-tab_active' : ''} `} 
                  onClick={() => setTab('desc')}
                >
                  Description
                </h6>
                <h6 
                  className={` ${ tab === 'rev' ? 'food-details-tab_active' : ''} `} 
                  onClick={() => setTab('rev')}
                >
                  Review
                </h6>
              </div>
              {
                tab === "desc" ? (
                  <div className="food-details-tab_content">
                    <p>{desc}</p>
                  </div>
                ) : (
                  <div className="food-details-tab_form mb-3">
                    <div className='food-details-testimonial_review'>
                      <TestimonialSlider />
                    </div>
                    <form className='food-details-form my-5' onSubmit={submitHandler}>
                      <div className="food-details-form_group">
                        <input 
                          type="text" 
                          placeholder='Enter your name' 

                          onChange={(e) => setEnteredName(e.target.value) }
                          required 
                        />
                      </div>
                      <div className="food-details-form_group">
                        <input 
                          type="text" 
                          placeholder='Enter your email' 
                          onChange={(e) => setEnteredEmail(e.target.value) }
                          required
                        />
                      </div>
                      <div className="food-details-form_group">
                        <textarea 
                          row={6} 
                          type="text" 
                          placeholder='Write your review' 
                          onChange={(e) => setReviewMsg(e.target.value) }
                          required 
                        />
                      </div>
                      <button type='submit' className='universal_btn'>Submit</button>
                    </form>
                  </div>
                )
              }
            </Col>
            <Col lg='12' className='mt-4'>
              <h2 className='food-details-related_product_title'>You might also like</h2>
            </Col>
            {
              relatedProduct.map((item, index) => (
                (product.id !== item.id) 
                ? <Col lg='3' md='4' sm='6' xs='6' key={index} className='mt-4'>
                    <ProductCard item={item} />
                  </Col>
                : ''
              ))
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default FoodDetails