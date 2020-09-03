import React, { Component } from 'react'
import logo from '../assets/icon.png'
import home from '../assets/home.png'
import providers from '../assets/travel.png'
import meeting from '../assets/meeting.png'
import message from '../assets/message.png'
import about from '../assets/about.png'
import './Navbar.css'

export default class Navbar extends Component {
    render() {
        return (
            <nav className='header'>
                <img src={logo} alt='Logo'/>
            </nav>
        )
    }
}