import React, { Component } from 'react';
import { Link } from '@reach/router';
import './Meets.css';

import Meditation from '../../image/places/yoga.jpg';
import Conservacion from '../../image/places/conservacion.jpg';
import Observacion from '../../image/places/observación.jpg';
import Nevado from '../../image/places/nevado.jpg';
import Senderismo from '../../image/places/senderismo.jpg';

export default class Meets extends Component {
    render() {
        return (
            <div className='container-2'>
                <div className='cards_background'>
                    <div className='cards_container'>
                        <h1> Conferencias y Talleres</h1>
                        <div className='card_meets'>
                            <div className='card_image'>
                                <img src={ Meditation } alt='Meditación' />
                            </div>
                            <div className='card_info'>
                                <span> Publicado hace 4 horas </span>
                                <h3> Taller de conservación ambiental en el Parque Nacional Natural Tayrona</h3>
                                <h4>Colombia Travel Ltd</h4>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. 
                                </p>
                                <span className='price'><strong>Precio: </strong> $ 100.000</span>
                                <div className='container_btnCard-1'>
                                    <Link to='/developing' className='btnCard-1'>
                                        Reservar
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className='card_meets'>
                            <div className='card_image'>
                                <img src={ Conservacion } alt='Conservación' />
                            </div>
                            <div className='card_info'>
                                <span> Publicado hace 3 días </span>
                                <h3> Sesión de Meditación en la Selva Amazónica</h3>
                                <h4>Ecoturismo en la Amazonia S.A.S.</h4>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. 
                                </p>
                                <span className='price'><strong>Precio: </strong> $ 300.000</span>
                                <div className='container_btnCard-1'>
                                    <Link to='/developing' className='btnCard-1'>
                                        Reservar
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className='card_meets'>
                            <div className='card_image'>
                                <img src={ Observacion } alt='Observación de fauna y flora' />
                            </div>
                            <div className='card_info'>
                                <span> Publicado hace 5 minutos </span>
                                <h3> Observación de fauna y flora en la Isla de Corota </h3>
                                <h4>Ecoturismo en la Amazonia S.A.S.</h4>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. 
                                </p>
                                <span className='price'><strong>Precio: </strong> $ 1'000.000</span>
                                <div className='container_btnCard-1'>
                                    <Link to='/developing' className='btnCard-1'>
                                        Reservar
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className='card_meets'>
                            <div className='card_image'>
                                <img src={ Nevado } alt='Nevado' />
                            </div>
                            <div className='card_info'>
                                <span> Publicado hace 3 semanas </span>
                                <h3> Caminata geológica en el Parque de los Nevados </h3>
                                <h4> Turismo Tolima-Caldas S.A.</h4>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. 
                                </p>
                                <span className='price'><strong>Precio: </strong> $ 1'500.000</span>
                                <div className='container_btnCard-1'>
                                    <Link to='/developing' className='btnCard-1'>
                                        Reservar
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className='card_meets'>
                            <div className='card_image'>
                                <img src={ Senderismo } alt='Senderismo' />
                            </div>
                            <div className='card_info'>
                                <span> Publicado hace 3 días </span>
                                <h3> Senderismo Interpretativo por varios Parques naturales </h3>
                                <h4> Turismo Colombia S.A.S.</h4>
                                <p>
                                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. 
                                </p>
                                <span className='price'><strong>Precio: </strong> $ 3'500.000</span>
                                <div className='container_btnCard-1'>
                                    <Link to='/developing' className='btnCard-1'>
                                        Reservar
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
