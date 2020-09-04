import React, { Component } from 'react';
import logo from '../assets/icon.png';
import home from '../assets/home.png';
import providers from '../assets/travel.png';
import meeting from '../assets/meeting.png';
import message from '../assets/message.png';
import about from '../assets/about.png';
import './Navbar.css';
import Menu from './Menu';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav>
                <Link to='/'>
                    <img src={ logo } alt='Logo'/>
                    <h1> Dásos </h1>
                </Link>
                <Menu />
            </nav>
        )
    }
}