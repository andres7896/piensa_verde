import React, { Component } from 'react';
import './Landing.css'

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import uno from '../../image/places/1.jpeg'
import dos from '../../image/places/2.jpg'
import tres from '../../image/places/3.jpg'
import cuatro from '../../image/places/4.jpg'


export default class Landing extends Component {
    render() {
        return (
            <div className='container'>
                <Header />

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
                                    <img src={uno} alt="" />
                                    </div>
                                </div>
                                <div className="slide slide_2">
                                    <div className="slide-content">
                                    <img src={dos} alt="" />
                                    </div>
                                </div>
                                <div className="slide slide_3">
                                    <div className="slide-content">
                                    <img src={tres} alt="" />
                                    </div>
                                </div>
                                <div className="slide slide_4">
                                    <div className="slide-content">
                                    <img src={cuatro} alt="" />
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
                            <h1>La naturaleza es el sostén de todos los seres y de la vida en el universo</h1>
                            <span>Dalai Lama</span>
                            <a href="#" className="start">Get Started</a>
                        </div>
                    </header>
                    <div className="features">
                        <div className="feature">
                            <i className="fa fa-bar-chart icon" />
                            <div className="feature-content">
                                <h3>Stunning Visual</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam debitis harum eveniet, ea, ipsum necessitatibus?</p>
                            </div>
                        </div>
                        <div className="feature">
                            <i className="fa fa-code icon" />
                            <div className="feature-content">
                                <h3>Clean Code</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam debitis harum eveniet, ea, ipsum necessitatibus?</p>
                            </div>
                        </div>
                        <div className="feature">
                            <i className="fa fa-gear icon" />
                            <div className="feature-content">
                                <h3>More Optimized</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam debitis harum eveniet, ea, ipsum necessitatibus?</p>
                            </div>
                        </div>
                    </div>
                    <section id="our-story">
                        <div className="story-wrapper">
                            <div className="story-text">
                                <div>
                                    <h1>Our Untold Story</h1>
                                    <span>Improvise</span>
                                </div>
                            </div>
                            <img src={uno} alt="Story" className="story-img" />
                        </div>
                        <div className="box">
                            <h3>From the beginning.</h3>
                            <br />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque quo molestias vero quas, adipisci consequatur praesentium inventore, laudantium culpa tempore animi, et vitae! Ipsam fugit quo qui tempore a ea.</p>
                        </div>
                    </section>
                    <section className="letter">
                        <div className="control">
                            <h3>Subscribe for our newsletter</h3>
                            <span>Be Updated</span>
                            <input type="email" placeholder="Your Email" className="input" />
                            <input type="submit" defaultValue="Subscribe" className="btn" />
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        )
    }
}
