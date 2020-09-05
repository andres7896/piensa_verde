import React, { Component } from 'react';
import './Contact.css'

import Message from '../../image/icons/message.png'

export default class Contact extends Component {
    render() {
        return (
            <div className='container'>
                <div className='contact-1'>
                    <div className='message_icon'>
                        <img src={Message} alt='Mensaje' />
                    </div>
                    <div className='contact_form'>
                        <h1> Contactanos </h1>
                        <label htmlFor='name'> Nombre </label>
                        <input type='text' id='name' className='InputName' placeholder='Nombre' />
                        <br></br>
                        <label htmlFor='affair'> Asunto </label>
                        <input type='text' id='affair' className='InputAffair' placeholder='Asunto' />
                        <br></br>
                        <label htmlFor='message'> Mensaje </label>
                        <br></br>
                        <textarea placeholder='Mensaje' id='message' className='message'></textarea>
                        <br></br>
                        <button className='btnSend'> Enviar </button>
                    </div>
                </div>
            </div>
        )
    }
}
