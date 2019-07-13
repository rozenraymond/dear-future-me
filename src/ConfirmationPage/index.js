import React from "react";
import { StartButton, Heading } from "../HomePage/index.style";

const ConfirmationPage = props => {
  const { history } = props;
  return (
    <>
      <Heading>Header</Heading>
      <p>
        Thanks for your letter! We’ve stored it away in a time capsule until{" "}
        {props.sentDate}.
      </p>
      <p>
        When the time comes, we’ll send it back to your {props.sendMethod}:{" "}
        {props.sendAddress}.
      </p>
      <p>We hope you enjoy reading it when the time comes!</p>
      <StartButton
        type="primary"
        onClick={() => {
          history.push("/create-letter");
        }}
      >
        Create another letter!
      </StartButton>
      </>
  );
};

export default ConfirmationPage;
