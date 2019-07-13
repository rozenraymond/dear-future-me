import React from "react";
import {
  Heading,
  Content,
  Container,
  StartButton,
  FullBackground
} from "./index.style";
import Layout from "../Layout";

const HomePage = props => {
  const { history } = props;
  return (
    <Layout>
      <Heading>
        {" "}
        Dear Future <span id="me">Me</span>
      </Heading>
      <Content>
        <p>Send a letter to your future self</p>
        <p>
          Is there anything you would like to tell yourself one month, one year
          or ten years down the line?
        </p>
        <p>
          Write it down. We will keep it safe and send it back to you when the
          time comes.
        </p>
      </Content>
      <StartButton
        onClick={() => {
          history.push("/create-letter");
        }}
      >
        Start writing
      </StartButton>
    </Layout>
  );
};

export default HomePage;
