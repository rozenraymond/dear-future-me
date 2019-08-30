import React from "react";
import Form from "./Form";
import "./index.css";
import Layout from "../Layout";

const LetterForm = props => {
  return (
    <Layout>
      <Form {...props} />
    </Layout>
  );
};

export default LetterForm;
