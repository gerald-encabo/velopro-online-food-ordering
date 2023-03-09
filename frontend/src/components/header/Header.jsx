import { useEffect, useRef } from "react"
import { Container } from "reactstrap"
import { NavLink, Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { FiShoppingCart } from 'react-icons/fi'
import { BsVimeo } from 'react-icons/bs'
import { AiOutlineMenu, AiOutlineUser } from 'react-icons/ai'
import { cartUiActions } from '../../store/shopping-cart/cartUiSlice'
import '../../styles/header.scss'
import '../../index.scss'

const nav__links = [
  {
    display: 'Home',
    path: '/home'
  },
  {
    display: 'Foods',
    path: '/foods'
  },
  {
    display: 'Cart',
    path: '/cart'
  },
  {
    display: 'Contact',
    path: '/contact'
  }
]

const Header = () => {

  const menuRef = useRef(null)
  const headerRef = useRef(null)
  const totalQuantity = useSelector(state => state.cart.totalQuantity)
  const dispatch = useDispatch()

  const toggleMenu = () => menuRef.current.classList.toggle('header-show_menu')

  const toggleCart = () => {
    dispatch(cartUiActions.toggle())
  }

  useEffect(()=> {
    window.addEventListener('scroll', ()=> {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('header-shrink')
      } else {
        headerRef.current.classList.remove('header-shrink')
      }
    })
  }, [])

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="header-nav_wrapper d-flex align-items-center justify-content-between">

          {/* VeloPro  Logo */}
          <div className="header-logo">
            <Link to='/home'>
              {/* <img src={logo} alt="VeloPro logo" /> */}
              <BsVimeo className="header-logo_icon"/>
              <h5>Velo<span>Pro</span></h5>
            </Link>
          </div>

          {/* Menu Option */}
          <div className="header-navigation" ref={menuRef}  onClick={toggleMenu}>
            <div className="header-menu d-flex align-items-center gap-5">
              {
                nav__links.map((item, index)=>(
                  <NavLink
                    to={item.path} 
                    key={index} 
                    className={(navClass) => navClass.isActive ? "header-active_menu" : "" }
                  >
                    {item.display}
                  </NavLink>
                ))
              }
            </div>
          </div>

           {/* Nav Right Icons */}
           <div className="header-nav_right d-flex align-items-center gap-4">
              <span className="header-cart_icon" onClick={toggleCart}>
                <FiShoppingCart className="header-icon"/>
                <span className="header-cart_badge">{totalQuantity}</span>
              </span>

              <span className="header-user">
                <Link to='/login'>
                  <AiOutlineUser className="header-icon" />
                </Link>
              </span>

              <span className="header-mobile_menu" onClick={toggleMenu}>
                <AiOutlineMenu className="header-icon"/>
              </span>
           </div>
        
        </div>
      </Container>
    </header>
  )
}
export default Header
//BsVimeo, FaVimeoV