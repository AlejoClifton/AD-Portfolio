'use client';

import { SectionContainer, FormContainer } from '@/styled-components/components/sc-main';
import { useState } from 'react';

const Form = () => {
    const [data, setData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        console.log(data);
    };

    return (
        <SectionContainer id="contact">
            <FormContainer action="" onSubmit={onSubmit}>
                <header>
                    <h2>Let’s work together on your next proyect</h2>
                    <p>Improve user experience and performance. Achieve excellence in digital solutions.</p>
                </header>
                <div>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" onChange={handleChange} placeholder='Name'/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" onChange={handleChange} placeholder='Email'/>
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" cols="30" rows="10" onChange={handleChange} placeholder='Message'></textarea>
                    </div>
                    <input type="submit" value="Send" />
                </div>
            </FormContainer>
        </SectionContainer>
    );
};

export default Form;
