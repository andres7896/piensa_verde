import React from 'react';
import { Router } from '@reach/router';

import AboutPage from '../pages/about/About';
import ConferencePage from '../pages/meets/Meets';
import ContactPage from '../pages/contact/Contact';
import ErrorPage from '../pages/404/Error';
import LandingPage from '../pages/landing/Landing';
import TravelsPage from '../pages/travels/Travels';
import Developing from '../pages/developing/Developing';


const AppRouter = () => (
  <Router>
    <AboutPage path="/about" />
    <ConferencePage path="/conferences" />
    <ContactPage path="/contact" />
    <Developing path="/developing"/>
    <ErrorPage path="/404" default />
    <LandingPage path="/" />
    <TravelsPage path="/travels" />
  </Router>
);

export default AppRouter;