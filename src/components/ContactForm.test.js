import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';

test('firstname, lastname, email, message input are rendered', () => {
    const { getByLabelText } = render(<ContactForm />)
    getByLabelText(/first Name/i);
    getByLabelText(/last Name/i);
    getByLabelText(/email/i);
    getByLabelText(/message/i);
});

test('form submit adds new firstname, lastname, email, message to the list', () => {
    const { getByLabelText, getByText, getByTestId } = render(<ContactForm />)
    // querying for all the input nodes
    const firstNameInput = getByLabelText(/first Name/i);
    const lastNameInput = getByLabelText(/last Name/i);
    const emailInput = getByLabelText(/email/i);
    const messageInput = getByLabelText(/message/i);

    // use the change event to add text to each input
    fireEvent.change(firstNameInput, { target: { value: 'Test firstName'} })
    fireEvent.change(lastNameInput, { target: { value: 'Test lastName'} })
    fireEvent.change(emailInput, { target: { value: 'Test email'} })
    fireEvent.change(messageInput, { target: { value: 'Test message'} })

    expect(firstNameInput.value).toBe('Test firstName');
    expect(lastNameInput.value).toBe('Test lastName');
    expect(emailInput.value).toBe('Test email');
    expect(messageInput.value).toBe('Test message');

   
})