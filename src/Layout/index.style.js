import styled from "styled-components";

export const imgBg = require("../assets/pattern12.png");

export const FullBackground = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: repeat;
  background-image: url(${imgBg});
  transition: background-image 1s ease-in-out;
  text-align: center;
  overflow: auto;
`;

export const Container = styled.div`
  background-color: #f9f6e8;
  width: 80%;
  padding: 3rem;
  border-radius: 21px;
`;
