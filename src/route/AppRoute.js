import React, { Component, Fragment } from 'react'
import { Route, Routes } from 'react-router'
import HomePage from '../pages/HomePage'
import UserLoginPage from '../pages/UserLoginPage';
import ContactPage from '../pages/ContactPage';
import PrivacyPage from '../pages/PrivacyPage';
import PurchasePage from '../pages/PurchasePage';
import RefundPage from '../pages/RefundPage';
import AboutPage from '../pages/AboutPage';
import OpenJobsPage from '../pages/OpenJobsPage';
import WhyJoinUsPage from '../pages/WhyJoinUsPage';

class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Routes>
            <Route exact path="/" element={<HomePage />}></Route>
            <Route exact path="/login" element={<UserLoginPage />}></Route>
            <Route exact path="/contact" element={<ContactPage />}></Route>
            <Route exact path="/refund" element={<RefundPage />}></Route>
            <Route exact path="/privacy" element={<PrivacyPage />}></Route>
            <Route exact path="/about" element={<AboutPage />}></Route>
            <Route exact path="/purchase" element={<PurchasePage />}></Route>
            <Route exact path="/openjobs" element={<OpenJobsPage />}></Route>
            <Route exact path="/whyjoinus" element={<WhyJoinUsPage />}></Route>
        </Routes>
      </Fragment>
    )
  }
}

export default AppRoute