import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Apple from '../../assets/image/apple.png'
import Google from '../../assets/image/google.png'

class FooterDesktop extends Component {
  render() {
    return (
      <Fragment>
        <div className='footerback m-0 mt-5 pt-3 shadow-sm'>
          <Container>
            <Row className='px-0 my-5'>
              <Col className='p-2' lg={3} mf={3} sm={6} xs={12}>
                <h5 className='footer-menu-title'>OFFICE ADDRESS</h5>
                <p>Dhaka , Bangladesh <br></br> Email: Support@easyshop.com</p>
                <h5 className="footer-menu-title">SOCIAL LINK</h5>
                <a href=""><i className="fab m-1 h4 fa-facebook"></i></a>
                <a href=""><i className="fab m-1 h4 fa-instagram"></i></a>
                <a href=""><i className="fab m-1 h4 fa-twitter"></i></a>
              </Col>
              <Col className='p-2' lg={3} mf={3} sm={6} xs={12}>
                <h5 className='footer-menu-title'>THE COMPANY</h5>
                <Link to="/about" className="footer-link"> About Us</Link><br></br>
                <Link to="/contact" className="footer-link"> Contact Us</Link><br></br>
                <Link to="/purchase" className="footer-link">How To Purchase</Link><br></br>
                <Link to="/privacy" className="footer-link"> Privacy Policy</Link><br></br>
                <Link to="/refund" className="footer-link"> Refund Policy </Link><br></br>
              </Col>
              <Col className='p-2' lg={3} mf={3} sm={6} xs={12}>
                <h5 className='footer-menu-title'>CAREER</h5>
                <Link to="/openjobs" className="footer-link">OPEN JOBS</Link><br></br>
                <Link to="/whyjoinus" className="footer-link"> WHY JOIN US?</Link><br></br>
              </Col>
              <Col className='p-2' lg={3} mf={3} sm={6} xs={12}>
                <h5 className='footer-menu-title'>APPS</h5>
                <a><img src={Google}  /></a><br></br>
                <a><img className="mt-2" src={Apple}  /></a><br></br>
                Chose Your Language <br></br>
                <div id='google_translate_element'></div>
              </Col>
            </Row>
          </Container>
          <Container fluid={true} className="text-center m-0 pt-3 pb-1 bg-dark">
            <Container>
              <Row>
                <h6 className="text-white">© Copyright 2021 by easy Shop, All Rights Reserved</h6>
              </Row>
            </Container>
          </Container> 
        </div>
      </Fragment>
    )
  }
}

export default FooterDesktop