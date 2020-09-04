import React, { Component } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import Home from '../assets/home.png';

export default class Menu extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to='meeting'>
                            <img src={ Home } alt='Conferencias' class="meeting"/>
                            Conferencias
                        </Link>
                    </li>
                    <li>
                        <Link to='turism'>
                            <i class="turism"></i>
                            Ecoturisms
                        </Link>
                    </li>
                    <li>
                        <Link to='providers'>
                            <i class="providers"></i>
                            Proveedores
                        </Link>
                    </li>
                    <li>
                        <Link to='contact'>
                            <i class="contact"></i>
                            Contacto
                        </Link>
                    </li>
                    <li>
                        <Link to='about'>
                            <i class="about"></i>
                            Acerca de
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}
