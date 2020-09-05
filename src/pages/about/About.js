import React, { Component } from 'react';
import './About.css'

import Think from '../../image/icons/think_green.png';
import Artemi from '../../image/icons/Artemi.png';
import Forest from '../../image/places/bosque.jpg'

export default class About extends Component {
    render() {
        return (
            <div className='container'>
                <section className='about_container'>
                    <div className='about'>
                        <article>
                            <h1><strong> Gea </strong></h1>
                            <p>
                                Gea es un portal de la empresa <em><strong>Piensa Verde</strong></em>, la cual se enfoca en incentivar el Ecoturismo a nivel nacional e internaciona,
                                con el fin no solo de apoyar el turismo sino tambien hacer que este contribuya a la conservación del planeta.
                                Este portal busca centralizar la infromación relacionada con el <em><strong>Ecoturismo</strong></em>, como los lugares en los cuales se puede realizar
                                turismo ecológico, cuales son las actividades que se pueden hacer en estos lugares, los talleres que se hacen para motivar el respeto por la naturaleza
                                y la conservación de la misma.
                            </p>
                        </article>
                        <div className='organizations'>
                            <img src={Think} alt='piensa verder' />
                            <img src={Artemi} alt='Artemi' />
                        </div>
                    </div>
                    <div className='ecoturism'>
                        <article>
                            <h2>¿Qué es <strong>Ecoturismo</strong>?</h2>
                            <p>
                                El Ecoturismo es una modalidad del Turismo de Naturaleza que surgió como alternativa al turismo tradicional o también llamado “de masas”,
                                muchas veces depredador hacia las comunidades donde se desarrolla. Tiene sus fundamentos en el desarrollo sustentable de las naciones;
                                es decir, busca que se salvaguarden los recursos naturales en el presente para que futuras generaciones tengan la oportunidad igualmente de aprovecharlos,
                                mientras se fomenta un crecimiento social, cultural y económico de la población local. <em><strong>Entorno Turístico, 2020</strong></em>
                            </p>
                            <p>
                                Ana Báez en su libro “Ecoturismo / Turismo Responsable: el caso de Costa Rica” considera que el Ecoturismo debe desarrollarse bajo los siguientes valores y que deben ser seguidos tanto por el turista como por la gente local:
                                <br></br>
                                    - <strong>Responsable </strong>con el uso y manejo de atractivos turísticos.<br></br>
                                    - <strong>Respetuoso </strong>de las comunidades donde se desarrollan las actividades.<br></br>
                                    - <strong>Honesto </strong>con el producto para que conserve sus condiciones auténticas mientras se presenta al turista.<br></br>
                                    - <strong>Educativo </strong>para que el visitante adquiera nuevos conocimientos del lugar visitado.<br></br>
                                    - <strong>Interactivo </strong>al permitir un contacto directo con los recursos naturales y culturales.<br></br>
                                    - <strong>Democrático </strong>para que los beneficios obtenidos se repartan de manera equitativa.<br></br>
                            </p>
                        </article>
                        <div className='land'>
                            <img src={Forest} alt='bosque' />
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
