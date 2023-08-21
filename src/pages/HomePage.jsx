import React, { Component, Fragment } from 'react'
import FeaturedProducts from '../components/Home/FeaturedProducts'
import Categories from '../components/Home/Categories'
import Collection from '../components/Home/Collection'
import NewArrival from '../components/Home/NewArrival'
import HomeTop from '../components/Home/HomeTop'
import NavMenuDesktop from '../components/Common/NavMenuDesktop'
import NavMenuMobile from '../components/Common/NavMenuMobile'
import HomeTopMobile from '../components/Home/HomeTopMobile'

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <NavMenuMobile />
        <HomeTop />
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
      </Fragment>
    )
  }
}

export default HomePage