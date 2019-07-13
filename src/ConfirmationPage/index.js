import React from 'react';
import Button from 'antd/es/button';

const ConfirmationPage = (props) => {
  const {
    history
  } = props;
  return (
   <div>
       <h1>Your letter has been sent</h1>
        <Button type="primary" onClick={() => {history.push('/create-letter')}}>Create another letter!</Button>
   </div>
  );
}

export default ConfirmationPage;