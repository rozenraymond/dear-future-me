// import React from "react";
// import { StartButton, Heading } from "../HomePage/index.style";

// const ConfirmationPage = props => {
//   const { history } = props;
//   return (
//     <>
//       <Heading>Header</Heading>
//       <p>
//         Thanks for your letter! We’ve stored it away in a time capsule until{" "}
//         {props.sentDate}.
//       </p>
//       <p>
//         When the time comes, we’ll send it back to your {props.sendMethod}:{" "}
//         {props.sendAddress}.
//       </p>
//       <p>We hope you enjoy reading it when the time comes!</p>
//       <StartButton
//         type="primary"
//         onClick={() => {
//           history.push("/create-letter");
//         }}
//       >
//         Create another letter!
//       </StartButton>
//       </>
//   );
// };

// export default ConfirmationPage;

import React from 'react';
import Button from 'antd/es/button';
import { Container, TextContainer, Text, CardHeader, Capsule } from './index.style';
import timeCapsule from '../Timecapsule.png'

const ConfirmationPage = (props) => {
  const {
    history
  } = props;
  return (
   <>
     <Capsule src={timeCapsule} alt="time capsule" />
     <TextContainer> 
        <CardHeader>Thanks for your message!</CardHeader>
        { props.sentDate && props.sendMethod && props.sendAddress &&
            <Text>We’ve stored it away in a time capsule until {props.sentDate}. When the time comes, we’ll send it back to your {props.sendMethod}: {props.sendAddress}.</Text>
          || 
            <Text>We've stored it away and will send it to you when the time comes.</Text>
        }
        <Text>We hope you enjoy reading it!</Text>
     </TextContainer>
     <Button type="primary" onClick={() => {history.push('/create-letter')}}>Write another letter</Button>
   </>
  );
}

export default ConfirmationPage;
