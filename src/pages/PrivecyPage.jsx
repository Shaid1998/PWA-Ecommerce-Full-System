import React, { Component, Fragment } from 'react'
import FooterDesktop from '../components/Common/NavMenuDesktop'
import FooterMobile from '../components/Common/NavMenuMobile'
import Privacy from '../components/others/Privacy'
import NavMenuDesktop from '../components/Common/FooterDesktop'
import NavMenuMobile from '../components/Common/FooterMobile'

class PrivecyPage extends Component {
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

                <Privacy /> 
                
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


export default PrivecyPage