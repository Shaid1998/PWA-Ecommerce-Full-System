import React, { Component, Fragment } from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

class NewArrival extends Component {
  constructor(props){
    super(props);
    this.next=this.next.bind(this);
    this.previous=this.previous.bind(this)
  }
  next(){
      this.slider.slickNext();
  }
  previous(){
      this.slider.slickPrev();
  }
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <Fragment>
        <Container className='text-center' fluid={true}>
          <div className='section-title text-center mb-55'>
            <h2>NEW ARRIVAL PRODUCT &nbsp;
              <a className="btn btn-sm ml-2 site-btn" onClick={this.previous} ><i className="fa fa-angle-left"></i></a>
              &nbsp;
              <a className="btn btn-sm ml-2 site-btn" onClick={this.next} ><i className="fa fa-angle-right"></i></a>
            </h2>
            <p>Some of our exclusive collection, You may Like! </p>
          </div>
          <Row>
            <Slider ref={c=>(this.slider=c)} {...settings}>
              <div>
                <Card className='image-box card'>
                  <img className='center' src='https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/7/p/9/-original-imaghgbyypzkzvud.jpeg?q=70' />
                  <Card.Body>
                    <p className='product-name-on-card'>SAMSUNG Galaxy F04 (Jade Purple, 64 GB)  (4 GB RAM)</p>
                    <p className='product-price-on-card'>Price: 120$</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className='image-box card'>
                  <img className='center' src='https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/y/9/g/-original-imagnfzyhh8gz8sd.jpeg?q=70' />
                  <Card.Body>
                    <p className='product-name-on-card'>POCO C55 (Cool Blue, 128 GB)  (6 GB RAM)</p>
                    <p className='product-price-on-card'>Price: 130$</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className='image-box card'>
                  <img className='center' src='https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/4/h/e/-original-imagzjhwmsamexfk.jpeg?q=70' />
                  <Card.Body>
                    <p className='product-name-on-card'>vivo T2x 5G (Glimmer Black, 128 GB)  (6 GB RAM)</p>
                    <p className='product-price-on-card'>Price: 150$</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className='image-box card'>
                  <img className='center' src='https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/q/p/c/-original-imagrqg4tzgvvjzy.jpeg?q=70' />
                  <Card.Body>
                    <p className='product-name-on-card'>Infinix SMART 7 (Night Black, 128 GB)  (4 GB RAM)</p>
                    <p className='product-price-on-card'>Price: 100$</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className='image-box card'>
                  <img className='center' src='https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/m/j/j/-original-imagnvvwvzyhfvx9.jpeg?q=70' />
                  <Card.Body>
                    <p className='product-name-on-card'>MOTOROLA G32 (Mineral Gray, 128 GB)  (8 GB RAM)</p>
                    <p className='product-price-on-card'>Price: 140$</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className='image-box card'>
                  <img className='center' src='https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/h/h/d/-original-imags487gaqqhcea.jpeg?q=70' />
                  <Card.Body>
                    <p className='product-name-on-card'>Realme C53 (Champion Gold, 64 GB)  (6 GB RAM)</p>
                    <p className='product-price-on-card'>Price: 130$</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className='image-box card'>
                  <img className='center' src='https://rukminim2.flixcart.com/image/832/832/kwzap3k0/shirt/g/q/9/m-lstr-grey-p-v-creations-original-imag9jggsvfcgpp4.jpeg?q=70' />
                  <Card.Body>
                    <p className='product-name-on-card'>Men Regular Fit Solid Spread Collar Formal Shirt</p>
                    <p className='product-price-on-card'>Price: 3.5$</p>
                  </Card.Body>
                </Card>
              </div>
              <div>
                <Card className='image-box card'>
                  <img className='center' src='https://rukminim2.flixcart.com/image/416/416/xif0q/t-shirt/q/u/g/s-oversizetsrt-101-kajaru-original-imagpxcfxh3jhd8g.jpeg?q=70' />
                  <Card.Body>
                    <p className='product-name-on-card'>Men Printed Round Neck Poly Cotton Green T-Shirt</p>
                    <p className='product-price-on-card'>Price: 3$</p>
                  </Card.Body>
                </Card>
              </div>
            </Slider>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default NewArrival