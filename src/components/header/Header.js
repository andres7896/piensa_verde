import React, { Component } from 'react';
import './Header.css';
import Logo from '../../image/icons/favicon.png';
import { Link } from '@reach/router';

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <nav>
                    <Link to='/' className='logo'>
                        <img src={Logo} alt='Logo' />
                        <h1> Gea </h1>
                    </Link>
                    <div className='menu'>
                        <Link to='/travels' className='btnNav'>
                            Lugares
                        </Link>
                        <Link to='/conferences' className='btnNav'>
                            Conferencias
                        </Link>
                        <Link to='/contact' className='btnNav'>
                            Contacto
                        </Link>
                        <Link to='/about' className='btnNav'>
                            Acerca de
                        </Link>
                    </div>
                </nav>
            </div>
        )
    }
}
