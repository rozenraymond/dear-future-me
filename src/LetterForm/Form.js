import React from "react";
import { Form, Input, Radio, DatePicker } from "antd";
import moment from "moment";
import validator from "validator";
import "./index.css";
import ConfirmationPage from "../ConfirmationPage";

const DATE_TIME_FORMAT = "MMMM Do YYYY, h:mm:ss a";
const { useState } = React;
const initialState = {
  recipient: "",
  sender: "",
  destination: "email",
  email: "",
  phoneNumber: 0,
  address: "",
  dateTime: moment(),
  message: "",
  attachement: false
};

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 }
};


const displayDestinationItem = (destination, onChange, error) => {
  if (destination === "sms") {
    return (
      <Form.Item
        label="Phone"
        {...formItemLayout}
        validateStatus={getStatus(error, "phoneNumber")}
      >
        <Input
          placeholder="phone number"
          onChange={e => onChange(e.target.value, "phoneNumber")}
        />
      </Form.Item>
    );
  }
  if (destination === "mail") {
    return (
      <Form.Item
        label="Address"
        {...formItemLayout}
        validateStatus={getStatus(error, "address")}
      >
        <Input
          placeholder="address"
          onChange={e => onChange(e.target.value, "address")}
        />
      </Form.Item>
    );
  }
  return (
    <Form.Item
      label="Email"
      {...formItemLayout}
      validateStatus={getStatus(error, "email")}
    >
      <Input
        placeholder="email"
        onChange={e => onChange(e.target.value, "email")}
      />
    </Form.Item>
  );
};

const getStatus = (error = [], field) => {
  if (error.length && error.indexOf(field) !== -1) {
    return "error";
  }
  return "success";
};

const CreateForm = props => {
  const [formState, setFormState] = useState(initialState);
  const [formError, setError] = useState([]);

  const handleFormLayoutChange = e => {
    setError([]);
    setFormState({
      ...formState,
      destination: e.target.value
    });
  };

  const handleDateChange = dateTimeInMoment => {
    setError([]);
    setFormState({
      ...formState,
      dateTime: dateTimeInMoment
    });
  };



  const messageOnChange = e => {
    setFormState({
      ...formState,
      message: e.target.value
    });
  };

  const desitnationDetailsOnChange = (value, field) => {
    setError([]);
    setFormState({
      ...formState,
      [field]: value
    });
  };

  const validateForm = () => {
    const error = [];
    if (
      formState.destination === "email" &&
      (!formState.email || !validator.isEmail(formState.email))
    ) {
      error.push("email");
    }

    if (
      formState.destination === "sms" &&
      (!formState.phoneNumber || !validator.isMobilePhone(formState.email))
    ) {
      error.push("phoneNumber");
    }

    if (formState.destination === "mail" && !formState.address) {
      error.push("address");
    }

    if (!formState.recipient) {
      error.push("recipient");
    }

    if (!formState.sender) {
      error.push("sender");
    }

    if (!formState.message) {
      error.push("message");
    }

    if (!formState.dateTime) {
      error.push("dateTime");
    }
    return error;
  };

  const onSubmit = async () => {
    const errors = validateForm();
    if (errors.length === 0) {
      props.history.push("/confirmation");
      // go to next page
    }
    setError(errors);
  };

  const recipientOnChange = e => {
    setFormState({
      ...formState,
      recipient: e.target.value
    });
  };

  const senderOnChange = e => {
    setFormState({
      ...formState,
      sender: e.target.value
    });
  };

  if (props.location.pathname === "/confirmation") {
    return (
      <ConfirmationPage
        sendDate={formState.dateTime}
        sendAddress={
          formState.address || formState.phoneNumber || formState.email
        }
        sendMethod={formState.destination}
        history={props.history}
      />
    );
  }

  return (
    <>
      <Form layout="horizontal" labelAlign="left">
        <Form.Item
          label="To"
          {...formItemLayout}
          validateStatus={getStatus(formError, "recipient")}
        >
          <Input placeholder="recepient" onChange={recipientOnChange} />
        </Form.Item>
        <Form.Item
          label="From"
          {...formItemLayout}
          validateStatus={getStatus(formError, "sender")}
        >
          <Input placeholder="sender" onChange={senderOnChange} />
        </Form.Item>
        <Form.Item label="Destination" {...formItemLayout}>
          <Radio.Group defaultValue="email" onChange={handleFormLayoutChange}>
            <Radio.Button value="email">Email</Radio.Button>
            <Radio.Button value="sms">Sms</Radio.Button>
            <Radio.Button value="mail">Mail</Radio.Button>
          </Radio.Group>
        </Form.Item>
        {displayDestinationItem(
          formState.destination,
          desitnationDetailsOnChange,
          formError
        )}
        <Form.Item
          label="Send on the"
          {...formItemLayout}
          validateStatus={getStatus(formError, "dateTime")}
        >
          <DatePicker
            style={{ minWidth: "300px" }}
            format={DATE_TIME_FORMAT}
            onChange={handleDateChange}
            defaultValue={formState.dateTime}
            showTime={{ defaultValue: moment("00:00:00", DATE_TIME_FORMAT) }}
          />
        </Form.Item>
        <Form.Item
          label="Message"
          {...formItemLayout}
          validateStatus={getStatus(formError, "message")}
        >
          <Input.TextArea
            placeholder="message"
            onChange={messageOnChange}
            rows={6}
          />
        </Form.Item>
      </Form>
      <div className="buttonWrapper">
        <button onClick={onSubmit} className="submitButton">
          Send
        </button>
      </div>
    </>
  );
};

export default CreateForm;
