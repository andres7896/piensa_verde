import React, { Component } from 'react';
import './Landing.css'

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Cristales from '../../image/places/caño_cristales.jpg';

export default class Landing extends Component {
    render() {
        return (
            <div className='container'>
                <Header />
                <h1>Hola</h1>
                <Footer />
            </div>
        )
    }
}
