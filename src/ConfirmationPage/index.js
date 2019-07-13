import React from 'react';
import Button from 'antd/es/button';

const ConfirmationPage = (props) => {
  const {
    history
  } = props;
  return (
   <div>
     <h1>Header</h1>
     <p>Thanks for your letter! We’ve stored it away in a time capsule until {props.sentDate}.</p>
     <p>When the time comes, we’ll send it back to your {props.sendMethod}: {props.sendAddress}.</p>
     <p>We hope you enjoy reading it when the time comes!</p>
     <Button type="primary" onClick={() => {history.push('/create-letter')}}>Create another letter!</Button>
   </div>
  );
}

export default ConfirmationPage;