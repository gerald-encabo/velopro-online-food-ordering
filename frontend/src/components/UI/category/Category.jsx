import { Container, Row, Col } from "reactstrap"
import { Link } from 'react-router-dom'
import categoryImg01 from '../../../assets/images/category-01.png'
import categoryImg02 from '../../../assets/images/category-02.png'
import categoryImg03 from '../../../assets/images/category-03.png'
import categoryImg04 from '../../../assets/images/category-04.png'
import '../../../styles/category.scss'

const categoryData = [
    {
        display: 'Burger',
        imgUrl: categoryImg01
    },
    {
        display: 'Pizza',
        imgUrl: categoryImg02
    },
    {
        display: 'Sushi',
        imgUrl: categoryImg03
    },
    {
        display: 'Taco',
        imgUrl: categoryImg04
    },
]

const Category = () => {
  return (
    <Container>
        <Row>
            {
                categoryData.map((item, index) => (
                    <Col lg='3' md='4' sm='6' xs='6' key={index} className="mb-3">
                        <Link to='/foods'>
                            <div className="category-item d-flex align-items-center gap-3">
                                <div className="category-img">
                                    <img src={item.imgUrl} alt='category-item' />
                                </div>
                                <h6>{item.display}</h6>
                            </div>
                        </Link>
                    </Col>
                ))
            }
        </Row>
    </Container>
  )
}
export default Category