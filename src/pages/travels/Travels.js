import React, { Component } from 'react';
import './Travels.css';
import { Link } from '@reach/router';

import Alta from '../../image/places/alta_guajira.jpg';
import Amazona from '../../image/places/amazonas.jpg';
import Caño from '../../image/places/caño_cristales.jpg';
import Corota from '../../image/places/corota.jpg';
import Ensenada from '../../image/places/ensenada.jpg';
import Gorgona from '../../image/places/gorgona.jpg';
import Nevados from '../../image/places/nevados.jpg';
import Purace from '../../image/places/parque_purace.jpg';
import Tayrona from '../../image/places/tayrona.jpg';

export default class Travels extends Component {
    render() {
        return (
            <div className='container'>
                <div className='cards_background'>
                    <div className='cards_container'>
                        <div className='card'>
                            <img src={Alta} alt='Alta guajira' />
                            <span> Publicado hace 6 días </span>
                            <h3> Alta Guajira </h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                            <div className='container_btnCard'>
                                <Link to='/contact' className='btnCard'>
                                    Info
                        </Link>
                            </div>
                        </div>
                        <div className='card'>
                            <img src={Amazona} alt='Amazonia' />
                            <span> Publicado hace 1 día </span>
                            <h3> Amazonia </h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                            <div className='container_btnCard'>
                                <Link to='/contact' className='btnCard'>
                                    Info
                        </Link>
                            </div>
                        </div>
                        <div className='card'>
                            <img src={Caño} alt='Caño' />
                            <span> Publicado hace 4 semanas </span>
                            <h3> Caño cristales </h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                            <div className='container_btnCard'>
                                <Link to='/contact' className='btnCard'>
                                    Info
                        </Link>
                            </div>
                        </div>
                        <div className='card'>
                            <img src={ Corota } alt='Corota' />
                            <span> Publicado hace 3 días </span>
                            <h3> Isla Corota </h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                            <div className='container_btnCard'>
                                <Link to='/contact' className='btnCard'>
                                    Info
                                </Link>
                            </div>
                        </div>
                        <div className='card'>
                            <img src={ Ensenada } alt='Ensenada' />
                            <span> Publicado hace 1 hora </span>
                            <h3> Ensenada </h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                            <div className='container_btnCard'>
                                <Link to='/contact' className='btnCard'>
                                    Info
                                </Link>
                            </div>
                        </div>
                        <div className='card'>
                            <img src={ Gorgona } alt='Isla gorgona' />
                            <span> Publicado hace 4 días  </span>
                            <h3> Isla Grogona </h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                            <div className='container_btnCard'>
                                <Link to='/contact' className='btnCard'>
                                    Info
                                </Link>
                            </div>
                        </div>
                        <div className='card'>
                            <img src={ Nevados } alt='Parque de los Nevados' />
                            <span> Publicado hace 23 horas  </span>
                            <h3> Parque de los Nevados </h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                            <div className='container_btnCard'>
                                <Link to='/contact' className='btnCard'>
                                    Info
                                </Link>
                            </div>
                        </div>
                        <div className='card'>
                            <img src={ Purace } alt='Parque Purace' />
                            <span> Publicado hace 3 semanas  </span>
                            <h3> Parque Purace </h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                            <div className='container_btnCard'>
                                <Link to='/contact' className='btnCard'>
                                    Info
                                </Link>
                            </div>
                        </div>
                        <div className='card'>
                            <img src={ Tayrona } alt='Parque el Tayrona' />
                            <span> Publicado hace 6 días </span>
                            <h3> Parque El Tayrona </h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            </p>
                            <div className='container_btnCard'>
                                <Link to='/contact' className='btnCard'>
                                    Info
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
