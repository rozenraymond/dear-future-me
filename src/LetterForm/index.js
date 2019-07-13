import React from 'react';
import Form from './Form';
import './index.css';
import { Container } from '../HomePage/index.style';

const LetterForm = () => {
    return (
        <Container>
            <h2 className="Hi-Future-Me">Hi future me</h2>
                <h5 className="Send-a-message-text">Send a message to your future self</h5>
                <Form />
        </Container>
    )
};

export default LetterForm;