import React from 'react';
import Form from './Form';
import './index.css';

const LetterForm = () => {
    return (
        <div className="PageWrapper">
            <h2 className="Hi-Future-Me">Hi future me</h2>
                <h5 className="Send-a-message-text">Send a message to your future self</h5>
                <Form />
        </div>
    )
};

export default LetterForm;