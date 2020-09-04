  
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ContactForm from './ContactForm'


test('renders form without crashing', () => {
    render(<ContactForm />)


 const firstName = screen.getByLabelText(/First Name*/i); 
const lastName = screen.getByLabelText(/Last Name*/i);
const email = screen.getByLabelText(/Email*/i);
 const message = screen.getByLabelText(/Message*/i); 
const submitBtn = screen.getByRole('button',{
    name: /submit/i
})  

fireEvent.change(firstName, { target: { value: 'Alexander' } });
fireEvent.change(lastName, { target: { value: 'Gambino' } });
fireEvent.change(email, { target: { value: 'ajg@aj.com' } });
fireEvent.change(message, { target: { value: 'hello world' } });
fireEvent.click(submitBtn)

})