import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

class Favourite extends Component {
  render() {
    return (
        <Fragment>
        <Container className='text-center' fluid={true}>
          <div className='section-title text-center mb-55'>
            <h2>MY FAVOURITE</h2>
            <p>Some of our exclusive collection, You may Like! </p>
          </div>
          <Row>
            <Col className='p-0' xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className='image-box card'>
                <img className='center' src='https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/b/h/q/m-609-triptee-original-imagpe9zxvdxgfgu.jpeg?q=70' />
                <Card.Body>
                  <p className='product-name-on-card'>Men Solid Polo Neck Pure Cotton Blue T-Shirt</p>
                  <p className='product-price-on-card'>Price: 5$</p>
                  <Button className='btn btn-sm'><i className='fa fa-trash-alt'>Remove</i> </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className='p-0' xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className='image-box card'>
                <img className='center' src='https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/1/c/d/m-auk0166-ausk-original-imagzbp8nmczhvxg.jpeg?q=70' />
                <Card.Body>
                  <p className='product-name-on-card'>Men Striped Round Neck Cotton Blend Light Blue, Black T-Shirt</p>
                  <p className='product-price-on-card'>Price: 3$</p>
                  <Button className='btn btn-sm'><i className='fa fa-trash-alt'>Remove</i> </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className='p-0' xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className='image-box card'>
                <img className='center' src='https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/s/c/p/m-db1024-15-3bros-original-imagz8zjfxthf7kn.jpeg?q=70' />
                <Card.Body>
                  <p className='product-name-on-card'>Men Solid Polo Neck Cotton Blend (220 gsm) Green T-Shirt</p>
                  <p className='product-price-on-card'>Price: 4$</p>
                  <Button className='btn btn-sm'><i className='fa fa-trash-alt'>Remove</i> </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className='p-0' xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className='image-box card'>
                <img className='center' src='https://rukminim2.flixcart.com/image/832/832/kr58yvk0/t-shirt/c/n/k/m-r-hf-451-black-london-hills-original-imag4ztguqrkfsec.jpeg?q=70' />
                <Card.Body>
                  <p className='product-name-on-card'>Men Solid Round Neck Cotton Blend Black T-Shirt</p>
                  <p className='product-price-on-card'>Price: 3.5$</p>
                  <Button className='btn btn-sm'><i className='fa fa-trash-alt'>Remove</i> </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className='p-0' xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className='image-box card'>
                <img className='center' src='https://rukminim2.flixcart.com/image/832/832/ky1vl3k0/t-shirt/s/8/0/m-hs-hanuman-orange-young-trendz-original-imagadfyaf39mtfj.jpeg?q=70' />
                <Card.Body>
                  <p className='product-name-on-card'>Men Graphic Print Round Neck Cotton Blend Orange T-Shirt</p>
                  <p className='product-price-on-card'>Price: 3.9$</p>
                  <Button className='btn btn-sm'><i className='fa fa-trash-alt'>Remove</i> </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className='p-0' xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className='image-box card'>
                <img className='center' src='https://rukminim2.flixcart.com/image/832/832/kkh6zrk0/t-shirt/w/j/n/m-t344hs-whsb-new-eyebogler-original-imafztgjdpkvr8ab.jpeg?q=70' />
                <Card.Body>
                  <p className='product-name-on-card'>Men Checkered Polo Neck Cotton Blend White, Blue T-Shirt</p>
                  <p className='product-price-on-card'>Price: 3.2$</p>
                  <Button className='btn btn-sm'><i className='fa fa-trash-alt'>Remove</i> </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className='p-0' xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className='image-box card'>
                <img className='center' src='https://rukminim2.flixcart.com/image/416/416/xif0q/t-shirt/q/u/g/s-oversizetsrt-101-kajaru-original-imagpxcfxh3jhd8g.jpeg?q=70' />
                <Card.Body>
                  <p className='product-name-on-card'>Men Printed Round Neck Poly Cotton Green T-Shirt</p>
                  <p className='product-price-on-card'>Price: 3$</p>
                  <Button className='btn btn-sm'><i className='fa fa-trash-alt'>Remove</i> </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className='p-0' xl={3} lg={3} md={3} sm={6} xs={6}>
              <Card className='image-box card'>
                <img className='center' src='https://rukminim2.flixcart.com/image/832/832/kwzap3k0/shirt/g/q/9/m-lstr-grey-p-v-creations-original-imag9jggsvfcgpp4.jpeg?q=70' />
                <Card.Body>
                  <p className='product-name-on-card'>Men Regular Fit Solid Spread Collar Formal Shirt</p>
                  <p className='product-price-on-card'>Price: 3.5$</p>
                  <Button className='btn btn-sm'><i className='fa fa-trash-alt'>Remove</i> </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Favourite