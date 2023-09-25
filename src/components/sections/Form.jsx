'use client';

import { SectionContainer, FormContainer } from '@/styled-components/components/sc-main';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Form = () => {
    const form = useRef();

    const onSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_p0sol4g', 'template_74tt6b7', form.current, 'tFRTJGRg5LW2qr8cD').then(
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
        <SectionContainer id="contact">
            <FormContainer ref={form} onSubmit={onSubmit}>
                <header>
                    <h2>Let’s work together on your next proyect</h2>
                    <p>Improve user experience and performance. Achieve excellence in digital solutions.</p>
                </header>
                <div>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="user_name" id="name" placeholder="Name" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="user_email" id="email" placeholder="Email" />
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                    </div>
                    <input type="submit" value="Send" />
                </div>
            </FormContainer>
        </SectionContainer>
    );
};

export default Form;
