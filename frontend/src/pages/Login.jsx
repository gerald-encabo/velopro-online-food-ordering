import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Helmet from '../components/helmet/Helmet'
import BannerSection from '../components/UI/banner-section/BannerSection'
import '../styles/login.scss'

const Login = () => {

  const loginEmailRef = useRef()
  const loginPasswordRef = useRef()

  const submitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <Helmet title='Login'>
      <BannerSection title='Login'/>
      <section>
        <Container>
          <Row>
            <Col lg='6' md='6' sm='12' className='m-auto text-center'>
              <form className="login-form mb-5" onSubmit={submitHandler}>
                <div className="login-form_group">
                  <input 
                    type="email" 
                    placeholder='Email'
                    ref={loginEmailRef}
                    required/>
                </div>
                <div className="login-form_group">
                  <input 
                    type="password" 
                    placeholder='Password'
                    ref={loginPasswordRef}
                    required/>
                </div>
                <button type="submit" className='universal_btn w-100 mb-3'>Login</button>
                <Link to='/register' className='text-black-50'>
                  <span className='login-form_link'>Need an account? Sign Up</span>
                </Link>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}
export default Login