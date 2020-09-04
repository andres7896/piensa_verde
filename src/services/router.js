import React from 'react';
import { Router } from '@reach/router';
import LandingPage from '../pages/landing/Landing';
import ConferencePage from '../pages/meets/Meets';
import TravelsPage from '../pages/travels/Travels';
import AboutPage from '../pages/about/About';
import ContactPage from '../pages/contact/Contact';
import SuccessPage from '../pages/success/Success';
import ErrorPage from '../pages/404/Error';


const AppRouter = () => (
  <Router>
    <AboutPage path="/about" />
    <ConferencePage path="conferences"/>
    <TravelsPage path="travels"/>
    <ContactPage path="/contact" />
    <SuccessPage path="/success" />
    <ErrorPage path="/404" default />
    <LandingPage path="/" />
  </Router>
);

export default AppRouter;