import React, { Component, Fragment } from 'react'
import FeaturedProducts from '../components/Home/FeaturedProducts'
import Categories from '../components/Home/Categories'
import Collection from '../components/Home/Collection'



class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <FeaturedProducts />
        <Collection />
        <Categories />
      </Fragment>
    )
  }
}

export default HomePage