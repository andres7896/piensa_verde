import React, { Component } from 'react'
import './Footer.css';


export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="main-content">
          <div className="left box">
            <div className="content">
        

            </div>
          </div>
          <div className="center box">
          <h2>Integrantes</h2>
          <div className="content">
             
            </div>
          </div>
          <div className="right box">
            <h2>Redes Sociales</h2>
            <div className="content">
              <div className="social">

              </div>
            </div>

          </div>
        </div>
        <div className="bottom">
          <center>
            <span className="credit">Humanidades II | </span>
            <span className="far fa-copyright" /><span> Todos los derechos reservados.</span>
          </center>
        </div>
      </footer>
    );
  }
}