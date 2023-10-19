'use client';

import './contact.scss';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Form = () => {
    const form = useRef();

    const onSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_dfhpbsm', 'template_f6o0wck', form.current, '5Mb0_DtoQxUvHJCuv').then(
            (result) => {
                alert('Message sent successfully');
                console.log(result.text);
            },
            (error) => {
                console.log(error.text);
            },
        );
    };

    return (
        <div id="contact" className='contact'>
            <form ref={form} onSubmit={onSubmit} className="formContact wrapper">
                <header>
                    <h2>Trabajemos juntos en tu próximo proyecto</h2>
                    <p>Mejoremos la experiencia del usuario y el rendimiento. Logremos la excelencia en soluciones digitales.</p>
                </header>
                <div>
                    <div>
                        <label htmlFor="name">Nombre</label>
                        <input type="text" name="user_name" id="name" placeholder="Nombre" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="user_email" id="email" placeholder="Email" />
                    </div>
                    <div>
                        <label htmlFor="message">Mensaje</label>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Mensaje"></textarea>
                    </div>
                    <input type="submit" value="Enviar" />
                </div>
            </form>
        </div>
    );
};

export default Form;
