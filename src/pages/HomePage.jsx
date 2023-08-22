import React, { Component, Fragment } from 'react'
import FeaturedProducts from '../components/Home/FeaturedProducts'
import Categories from '../components/Home/Categories'
import Collection from '../components/Home/Collection'
import NewArrival from '../components/Home/NewArrival'
import HomeTop from '../components/Home/HomeTop'
import NavMenuDesktop from '../components/Common/NavMenuDesktop'
import NavMenuMobile from '../components/Common/NavMenuMobile'
import HomeTopMobile from '../components/Home/HomeTopMobile'
import FooterDesktop from '../components/Common/FooterDesktop'
import FooterMobile from '../components/Common/FooterMobile'


class HomePage extends Component {
  componentDidMount(){
    window.scroll(0,0)
  }
  render() {
    return (
      <Fragment>
        <div className="Desktop">
          <NavMenuDesktop />
          <HomeTop />
        </div>
        <div className="Mobile">
          <NavMenuMobile />
          <HomeTopMobile />
        </div>
        <FeaturedProducts />
        <NewArrival />
        <Categories />
        <Collection />
        <div className="Desktop">
          <FooterDesktop/>
        </div>
        <div className="Mobile">
          <FooterMobile />
        </div>
      </Fragment>
    )
  }
}

export default HomePage