import React, { Component } from 'react';
import './Footer.css'
import Logo from '../../image/icons/tree.png';
import Facebook from '../../image/icons/facebook.png';
import Instagram from '../../image/icons/instagram.png';
import Twitter from '../../image/icons/twitter.png';
import Wpp from '../../image/icons/whatsapp.png';

export default class Footer extends Component {
    render() {
        return (
            <footer className='footer_container'>
                <section className='brand'>
                    <img src={Logo} alt='Logo' />
                    <div className='copyright'>
                        <h2><strong> Gea </strong></h2>
                        <p><em> Todos los derechos reservados © 2020 </em></p>
                        <h3><strong>Portal de Piensa Verde</strong></h3>
                    </div>
                </section>
                <section className='info'>
                    <div className='members'>
                        <h3><strong> Integrantes </strong></h3>
                        <ul>
                            <li> Carlos Rodríguez </li>
                            <li> Joham Morales </li>
                            <li> Andrés García </li>
                            <li> Miguel Bernal </li>
                        </ul>
                    </div>
                    <div className='social_media'>
                        <h3> <strong> Social Media </strong></h3>
                        <img src={Facebook} alt='facebook' />
                        <img src={Instagram} alt='instagram' />
                        <img src={Twitter} alt='twitter' />
                        <img src={Wpp} alt='whatsapp' />
                    </div>
                </section>
            </footer>
        )
    }
}
