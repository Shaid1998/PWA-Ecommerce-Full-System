import React, { Component, Fragment } from 'react'
import FooterDesktop from '../components/Common/FooterDesktop'
import FooterMobile from '../components/Common/FooterMobile'
import NavMenuDesktop from '../components/Common/NavMenuDesktop'
import NavMenuMobile from '../components/Common/NavMenuMobile'
import ProductDetails from '../components/product/ProductDetails'


class ProductDetailsPage extends Component {
    componentDidMount(){
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <div className="Desktop">
                    <NavMenuDesktop /> 
                </div>

                <div className="Mobile">
                    <NavMenuMobile />  
                </div>                       

                <ProductDetails />

                <div className="Desktop">
                    <FooterDesktop/>
                </div>

                <div className="Mobile">
                    <FooterMobile/>
                </div>
            </Fragment>
        )
    }
}

export default ProductDetailsPage