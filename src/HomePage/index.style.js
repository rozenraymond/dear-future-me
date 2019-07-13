import styled from "styled-components";
import { Button } from "antd";

const imgBg = require("../assets/pattern0.png");

export const FullBackground = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: repeat;
  background-image: url(${imgBg})
  transition: background-image 1s ease-in-out;
`;

export const Container = styled.div`
  background-color: #f9f6e8;
  width: 80%;
  padding: 3rem;
  border-radius: 21px;
`;

export const Heading = styled.h1`
  font-family: "Leckerli One";
  font-size: 90px;
  color: #d55ab4;
`;

export const Content = styled.section`
  font-family: "Ubuntu";
  font-size: 24px;
  color: #0d0d0d;
`;

export const StartButton = styled(Button)`
  max-width: 475px;
  height: 80px;
  font-family: "Ubuntu";
  border-radius: 48px;
  background-color: #d55ab4;
  font-size: 32px;
  color: #f2eed8;
  margin: 2rem 0;
  width: 100%;

  &:hover,
  &:focus {
    background-color: #d55ab4;
    color: #000;
    border: none;
  }
`;
