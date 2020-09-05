import React, { Component } from 'react';
import './Landing.css'

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';


export default class Landing extends Component {
    render() {
        return (
            <div className='container'>
                <Header />
                <div className="wrapper">
                    <header className="main-header">
                        <div className="content">
                            <h1>A new Generation Smartphone.</h1>
                            <span>Dual Camera. Clearer Photos</span>
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
                            <img src="story-bg.jpg" alt="Story" className="story-img" />
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
