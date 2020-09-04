import React from 'react';
import { Router } from '@reach/router';
import LandingPage from '../view/Landing';
import ConferencePage from '../view/Conference';
import EcoturismPage from '../view/Ecoturism';
import ProvidersPage from '..view/Providers';
import AboutPage from '../view/About';
import ContactPage from '../view/Contact';
import SuccessPage from '../view/Success';
import ErrorPage from '../view/404';


const AppRouter = () => (
  <Router>
    <AboutPage path="/about" />
    <ConferencePage path="conference"/>
    <EcoturismPage path="ecoturism"/>
    <ProvidersPage path="providers"/>
    <ContactPage path="/contact" />
    <SuccessPage path="/success" />
    <ErrorPage path="/404" default />
    <LandingPage path="/" />
  </Router>
);

export default AppRouter;