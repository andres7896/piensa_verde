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
                            <img src={ Alta } alt='Alta guajira' />
                            <span> Publicado hace 6 días </span>
                            <h3> Alta Guajira </h3>
                            <p>
                                Con atractivos como el Cabo de la Vela, Punta Gallinas o el Santuario los Flamencos, las costas desérticas que albergan a la población Wayuu son un destino perfecto para los amantes del ecoturismo. La Guajira es un territorio que despierta curiosidad y misterio por la belleza de sus playas, y por la presencia de un pueblo nativo que durante cientos de años habita estas tierras. 
                            </p>
                            <div className='container_btnCard'>
                                <Link to='/contact' className='btnCard'>
                                    Info
                            </Link>
                            </div>
                        </div>
                        <div className='card'>
                            <img src={ Amazona } alt='Amazonia' />
                            <span> Publicado hace 1 día </span>
                            <h3> Amazonia </h3>
                            <p>
                                Durante septiembre las aguas bajan y las playas del río quedan al descubierto y conforme aumentan las lluvias, el río alcanza áreas de bosque inundable y se forma lagos o lagunas donde con suerte podrá ver nadar varios ejemplares del famoso delfín rosado del Amazonas. En la selva, podrá apreciar diferentes especies de monos, aves y mariposas, sin contar la cantidad de árboles.
                            </p>
                            <div className='container_btnCard'>
                                <Link to='/contact' className='btnCard'>
                                    Info
                                </Link>
                            </div>
                        </div>
                        <div className='card'>
                            <img src={ Caño } alt='Caño' />
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
                            <h3> Isla de Corota </h3>
                            <p>
                                Situada al norte de la Laguna de la Cocha, esta isla alberga un santuario de flora y fauna protegido. Aunque es el área protegida más pequeña del país, es de gran importancia para la conservación del sistema ambiental de la laguna de la Cocha que resguarda animales como patos, truchas y ranas y una diversidad de flora, desde orquídeas hasta arrayanes. Además, este sitio es una fuente de energía.
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
                            <h3> Ensenada de Utría </h3>
                            <p>
                                Las calmadas y cálidas aguas de esta ensenada en la costa del pacífico del Chocó, hacen de este lugar ideal para que las especies migratorias como ballenas, tortugas y aves lo visiten. El espectacular paisaje de la Ensenada de Utría está conformado por bellas y relajantes playas, rodeadas de densa selva tropical. En este lugar se puede hacer observación de fauna y flora y avistamiento de aves, buceo, careteo y caminatas. 
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
                                A 35 km al oeste de la costa pacífica colombiana, se encuentra la isla de Gorgona y Gorgonilla, las cuales comprenden un Parque Nacional Natural debido a la riqueza de un ecosistema conformado por la densa selva tropical y las profundas aguas del pacífico. También llamada “Isla Ciencia”, en Gorgona se recoge información importante para que la comunidad científica pueda entender estos ecosistemas y saber cómo protegerlos. 
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
                                El Parque Natural de los Nevados, está ubicado entre los departamentos de Quindío, Tolima, Caldas y Risaralda y está conformado por el Nevado del Ruiz, el Nevado Santa Isabel y el Nevado del Tolima. Este parque recibe más de 5.000 visitantes al mes y es especialmente atractivo para amantes del montañismo gracias a la belleza de sus paisajes y a la diversidad de actividades, ascensos y senderos que ofrece el área.
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
                            <h3> Parque Nacional Natural Puracé </h3>
                            <p>
                                Aunque actualmente ni los picos más altos cuentan con nieve, el parque ofrece una experiencia increíble a los viajeros que buscan desconexión y aventura, y ofrece actividades como senderismo, observación de fauna y flora silvestre y la oportunidad de conocer de cerca los resguardos indígenas de Puracé y Paletará. Para llegar al Parque se debe ir hasta Popayán por tierra o avión y de ahí tomar transporte terrestre hasta el parque.
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
                            <h3> Parque Nacional Natural Tayrona </h3>
                            <p>
                                Aunque actualmente los indígenas tayrona ya no habitan estas tierras, todavía se asientan en diferentes puntos de la Sierra Nevada como la misteriosa Ciudad Perdida. Las deslumbrantes playas y el mar azul de este lugar es uno de los destinos turísticos más famosos del país y en la antigüedad este parque fue un sitio sagrado de pagamento a la tierra para los indígenas de la región. 
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
