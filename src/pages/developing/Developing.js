import React, { Component } from 'react';
import { Link } from '@reach/router';

import './Developing.css';
import Building  from '../../image/icons/building.png';

export default class Developing extends Component {
    render() {
        return (
            <div className='dev_container'>
                <img src={ Building } alt='constrcción'/>
                <h1> Pagina en desarrollo </h1>
                <p><em> Esta pagina actualmente se encuentra en desarrollo. Vuelve más tarde. </em></p>
                <Link to='/' className='btnReturn'>
                    Regresar
                </Link>
            </div>
        )
    }
}
