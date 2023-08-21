import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'

class FeaturedProducts extends Component {
  render() {
    return (
      <Fragment>
        <Container className='text-center' fluid={true}>
          <div className='section-title text-center mb-55'>
            <h2>FEATURED PRODUCT</h2>
            <p>Some of our exclusive collection, You may Like! </p>
          </div>
          <Row>
            <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className='image-box card'>
                <img className='center' src='https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/7/p/9/-original-imaghgbyypzkzvud.jpeg?q=70' />
                <Card.Body>
                  <p className='product-name-on-card'>SAMSUNG Galaxy F04 (Jade Purple, 64 GB)  (4 GB RAM)</p>
                  <p className='product-price-on-card'>Price: 120$</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className='image-box card'>
                <img className='center' src='https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/y/9/g/-original-imagnfzyhh8gz8sd.jpeg?q=70' />
                <Card.Body>
                  <p className='product-name-on-card'>POCO C55 (Cool Blue, 128 GB)  (6 GB RAM)</p>
                  <p className='product-price-on-card'>Price: 130$</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className='image-box card'>
                <img className='center' src='https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/4/h/e/-original-imagzjhwmsamexfk.jpeg?q=70' />
                <Card.Body>
                  <p className='product-name-on-card'>vivo T2x 5G (Glimmer Black, 128 GB)  (6 GB RAM)</p>
                  <p className='product-price-on-card'>Price: 150$</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className='image-box card'>
                <img className='center' src='https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/q/p/c/-original-imagrqg4tzgvvjzy.jpeg?q=70' />
                <Card.Body>
                  <p className='product-name-on-card'>Infinix SMART 7 (Night Black, 128 GB)  (4 GB RAM)</p>
                  <p className='product-price-on-card'>Price: 100$</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className='image-box card'>
                <img className='center' src='https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/m/j/j/-original-imagnvvwvzyhfvx9.jpeg?q=70' />
                <Card.Body>
                  <p className='product-name-on-card'>MOTOROLA G32 (Mineral Gray, 128 GB)  (8 GB RAM)</p>
                  <p className='product-price-on-card'>Price: 140$</p>
                </Card.Body>
              </Card>
            </Col>
            <Col className='p-1' key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
              <Card className='image-box card'>
                <img className='center' src='https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/h/h/d/-original-imags487gaqqhcea.jpeg?q=70' />
                <Card.Body>
                  <p className='product-name-on-card'>Realme C53 (Champion Gold, 64 GB)  (6 GB RAM)</p>
                  <p className='product-price-on-card'>Price: 130$</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default FeaturedProducts