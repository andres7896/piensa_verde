import React, { Component } from 'react';
import './Error.css'
import { Link } from '@reach/router';

import Error404 from '../../image/icons/error.png'

export default class Error extends Component {
    render() {
        return (
            <div className='error_container'>
                <img src={ Error404 } alt='Error 404'/>
                <h1> 404 NOT FOUND PAGE </h1>
                <p><em> Esta intentando acceder al una ruta no disponible </em></p>
                <Link to='/' className='btnReturn'>
                    Regresar
                </Link>
            </div>
        )
    }
}
