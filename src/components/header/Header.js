import React, { Component } from 'react';
import './Header.css';
import Logo from '../../image/icons/favicon.png';
import { Link } from '@reach/router';

export default class Header extends Component {
    render() {
        return (
            <nav>
                <Link to='/' className='header'>
                    <img src={ Logo } alt='Logo'/>
                    <h1> Artemi </h1>
                </Link>
                <div className='menu'>
                    <Link to='/travels' className='btnNav'>
                        Viajes
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
        )
    }
}
