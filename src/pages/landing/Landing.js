import React, { Component } from 'react';
import './Landing.css';

import Ocean from '../../image/places/ocean.jpeg';
import Caño from '../../image/places/caño_cristales2.jpg';
import Laguna from '../../image/places/laguna.jpg';
import Guatape from '../../image/places/guatape.jpg';
import Dalai from '../../image/icons/dalai.png'

export default class Landing extends Component {
    render () {
        return (
            <div className='container-1'>
                <div id="slider">
                    <input type="radio" name="slider" id="slide1" defaultChecked />
                    <input type="radio" name="slider" id="slide2" />
                    <input type="radio" name="slider" id="slide3" />
                    <input type="radio" name="slider" id="slide4" />
                    <div id="slides">
                        <div id="overflow">
                            <div className="inner">
                                <div className="slide slide_1">
                                    <div className="slide-content">
                                        <img src={Ocean} alt="Oceano"/>
                                    </div>
                                </div>
                                <div className="slide slide_2">
                                    <div className="slide-content">
                                        <img src={Caño} alt="Caño cristales"/>
                                    </div>
                                </div>
                                <div className="slide slide_3">
                                    <div className="slide-content">
                                        <img src={Laguna} alt="Laguna"/>
                                    </div>
                                </div>
                                <div className="slide slide_4">
                                    <div className="slide-content">
                                        <img src={Guatape} alt="Represa de Guatápe"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="controls">
                        <label htmlFor="slide1" />
                        <label htmlFor="slide2" />
                        <label htmlFor="slide3" />
                        <label htmlFor="slide4" />
                    </div>
                    <div id="bullets">
                        <label htmlFor="slide1" />
                        <label htmlFor="slide2" />
                        <label htmlFor="slide3" />
                        <label htmlFor="slide4" />
                    </div>
                </div>

                <div className="wrapper">
                    <header className="main-header">
                        <div className="content">
                            <h1>"La naturaleza es el sostén de todos los seres y de la vida en el universo"</h1>
                            <span>Dalai Lama</span>
                            <br></br>
                            <img src={ Dalai } alt='Dalai Lama' className='dalai_lama'/>
                        </div>
                    </header>
                    <div className="features">
                        <div className="feature">
                            <div className="feature-content">
                                <h3>Naturaleza</h3>
                                <p>"Las enfermedades no nos llegan de la nada. Se desarrollan a partir de pequeños pecados diarios contra la Naturaleza. 
                                    Cuando se hayan acumulado suficientes pecados, las enfermedades aparecerán de repente."</p>
                                <br></br>
                                <span><strong>Hipócrates, Padre de la medicina</strong></span>
                            </div>
                        </div>
                        <div className="feature">
                            <div className="feature-content">
                                <h3>Conservación</h3>
                                <p>"La gente no van a prepociparse por conservación de los animales a menos que piense que los animales merecen la pena."</p>
                                <br></br>
                                <span><strong>David attenborough, Naturalista</strong></span>
                            </div>
                        </div>
                        <div className="feature">
                            <div className="feature-content">
                                <h3>Universo</h3>
                                <p>"El universo no está obligado a estar en perfecta armonía con la ambición humana."</p>
                                <br></br>
                                <span><strong>Carl Sagan, Astrónomo</strong></span>
                            </div>
                        </div>
                    </div>
                    <section id="our-story">
                        <div className="story-wrapper">
                            <div className="story-text">
                                <div>
                                    <h1>Gea - Portal de Piensa Verde</h1>
                                    <span>Promoviendo el Ecoturismo</span>
                                </div>
                            </div>
                            <img src={Ocean} alt="Story" className="story-img" />
                        </div>
                        <div className="box">
                            <h3>Nuestro Objetivo</h3>
                            <br />
                            <p>Promover la conservación del medio ambien en Colombia y el mundo por medio del Ecoturismo.</p>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}
