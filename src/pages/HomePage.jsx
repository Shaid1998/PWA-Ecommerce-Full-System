import React, { Component, Fragment } from 'react'
import FeaturedProducts from '../components/Home/FeaturedProducts'
import Categories from '../components/Home/Categories'



class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <FeaturedProducts />
        <Categories />
      </Fragment>
    )
  }
}

export default HomePage