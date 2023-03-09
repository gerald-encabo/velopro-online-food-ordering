import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Helmet from '../components/helmet/Helmet'
import BannerSection from '../components/UI/banner-section/BannerSection'
import '../styles/login.scss'

const Register = () => {

  const signupNameRef = useRef()
  const signupEmailRef = useRef()
  const signupPasswordRef = useRef()
  const signupConfirmPasswordRef = useRef()

  const submitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <Helmet title='Signup'>
      <BannerSection title='Signup'/>
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='12' className='m-auto text-center'>
              <form className="register-form mb-5" onSubmit={submitHandler}>
                <div className="register-form_group">
                  <input 
                    type="text" 
                    placeholder='Name'
                    ref={signupNameRef}
                    required/>
                </div>
                <div className="register-form_group">
                  <input 
                    type="email" 
                    placeholder='Email'
                    ref={signupEmailRef}
                    required/>
                </div>
                <div className="register-form_group">
                  <input 
                    type="password" 
                    placeholder='Password'
                    ref={signupPasswordRef}
                    required/>
                </div>
                <div className="register-form_group">
                  <input 
                    type="password" 
                    placeholder='Confirm Password'
                    ref={signupConfirmPasswordRef}
                    required/>
                </div>
                <button type="submit" className='universal_btn w-100 mb-3'>Sign up</button>
                <Link to='/login' className='text-black-50'>
                  <span className='register-form_link'>Already have an account? Login</span>
                </Link>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}
export default Register