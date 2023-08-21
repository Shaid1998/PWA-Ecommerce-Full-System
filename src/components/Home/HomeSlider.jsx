import React, { Component, Fragment } from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import Slider1 from '../../assets/image/slider1.jpg'
import Slider2 from '../../assets/image/slider2.jpg'
import Slider3 from '../../assets/image/slider3.jpg'

class HomeSlider extends Component {
  render() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
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
            <Container>
                <Row>
                    <Slider {...settings}>
                        <div>
                        <img className="slider-img" src={Slider1} />
                        </div>
                        <div>
                        <img className="slider-img" src={Slider2} />
                        </div>
                        <div>
                        <img className="slider-img" src={Slider3} />
                        </div>
                    </Slider>
                </Row>
            </Container>
        </Fragment>
    )
  }
}

export default HomeSlider