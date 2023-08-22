import React, { Component, Fragment } from 'react'
import { Route, Routes } from 'react-router'
import HomePage from '../pages/HomePage'
import UserLoginPage from '../pages/UserLoginPage';
import ContactPage from '../pages/ContactPage';

class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Routes>
            <Route exact path="/" element={<HomePage />}></Route>
            <Route exact path="/login" element={<UserLoginPage />}></Route>
            <Route exact path="/contact" element={<ContactPage />}></Route>
        </Routes>
      </Fragment>
    )
  }
}

export default AppRoute