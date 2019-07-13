import React from "react";
import { Form, Input, Button, Radio, DatePicker } from "antd";
import moment from "moment";
import validator from 'validator';
import './index.css';
import ConfirmationPage from "../ConfirmationPage";


const DATE_TIME_FORMAT = 'MMMM Do YYYY, h:mm:ss a';
const { useState } = React;
const initialState = {
  recipient: undefined,
  sender: undefined,
  destination: "email",
  email: undefined,
  phoneNumber: undefined,
  address: undefined,
  dateTime: moment(),
  message: undefined,
  attachement: false
};

const formItemLayout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 }
};

const buttonItemLayout = {
  wrapperCol: { span: 14, offset: 4 }
};

const displayDestinationItem = (destination, onChange, error) => {

  if (destination === "sms") {
    return (
      <Form.Item label="Phone" {...formItemLayout} validateStatus={getStatus(error, 'phoneNumber')}>
        <Input placeholder="phone number" onChange={(e) => onChange(e.target.value, 'phoneNumber')} />
      </Form.Item>
    );
  }
  if (destination === "mail") {
    return (
      <Form.Item label="Address" {...formItemLayout} validateStatus={getStatus(error, 'address')}>
        <Input placeholder="address" onChange={(e) => onChange(e.target.value, 'address')} />
      </Form.Item>
    );
  }
  return (
    <Form.Item label="Email" {...formItemLayout} validateStatus={getStatus(error, 'email')}>
      <Input placeholder="email" onChange={(e) => onChange(e.target.value, 'email')} />
    </Form.Item>
  );
};

const getStatus = (error = [], field) => {
    if (error.length && error.indexOf(field) !== -1) {
        return 'error';
    }
    return 'success';
}

function range(start, end) {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  }

const CreateForm = (props) => {
    console.log('props', props);
  const [formState, setFormState] = useState(initialState);
  const [formError, setError] = useState([]);

  const handleFormLayoutChange = e => {
    setError([]);
    setFormState({
      ...formState,
      destination: e.target.value
    });
  };

  const handleDateChange = (dateTimeInMoment) => {
    setError([]);
    setFormState({
        ...formState,
        dateTime: dateTimeInMoment,
    });
  };

  function disabledDate(current) {
    // Can not select days before today and today
    return current && current <= moment().startOf();
  }

  function disabledDateTime() {
    return {
      disabledHours: () => range(0, 24).splice(4, 20),
      disabledMinutes: () => range(30, 60),
      disabledSeconds: () => [55, 56],
    };
  }

  const messageOnChange = e => {
    setFormState({
        ...formState,
        message: e.target.value,
    });
  }

  const desitnationDetailsOnChange = (value, field) => {
    setError([]);
    setFormState({
        ...formState,
        [field]: value,
    })
  }

  const validateForm = () => {
    const error = [];
    if (formState.destination === 'email' && (!formState.email || !validator.isEmail(formState.email))) {
        error.push('email');
    }

    if (formState.destination === 'sms' && (!formState.phoneNumber || !validator.isMobilePhone(formState.email))) {
        error.push('phoneNumber');
    }

    if (formState.destination === 'mail' && !formState.address) {
        error.push('address');
    }

    if (!formState.recipient) {
        error.push('recipient');
    }

    if (!formState.sender) {
        error.push('sender');
    }

    if (!formState.message) {
        error.push('message');
    }

    if (!formState.dateTime) {
        error.push('dateTime');
    }
    return error;
  }

  const onSubmit = async() => {
      const errors = validateForm();
    if (errors.length === 0) {
        // send it to api 
            // map data to send to api
            const result = {
                ...formState,
                dateTime: moment.utc(formState.dateTime).format(),
            }
            props.history.push('/confirmation');
        // go to next page
    }
    setError(errors)
  }

  const recipientOnChange = e => {
      setFormState({
          ...formState,
          recipient: e.target.value,
      });
  }

  const senderOnChange = e => {
      setFormState({
          ...formState,
          sender: e.target.value,
      });
}

    if (props.location.pathname === '/confirmation') {
        return (
            <ConfirmationPage 
                sendDate={formState.dateTime}
                sendAddress={formState.address || formState.phoneNumber || formState.email}
                sendMethod={formState.destination}
                history={props.history}
            />
        )
    }

  return (
    <>
    <Form
      layout="horizontal"
      labelAlign="left"
    >
      <Form.Item label="To" {...formItemLayout} validateStatus={getStatus(formError, 'recipient')}>
        <Input placeholder="recepient" onChange={recipientOnChange} />
      </Form.Item>
      <Form.Item label="From" {...formItemLayout} validateStatus={getStatus(formError, 'sender')}>
        <Input placeholder="sender" onChange={senderOnChange} />
      </Form.Item>
      <Form.Item label="Destination" {...formItemLayout}>
        <Radio.Group defaultValue="email" onChange={handleFormLayoutChange}>
          <Radio.Button value="email">Email</Radio.Button>
          <Radio.Button value="sms">Sms</Radio.Button>
          <Radio.Button value="mail">Mail</Radio.Button>
        </Radio.Group>
      </Form.Item>
      {displayDestinationItem(formState.destination, desitnationDetailsOnChange, formError)}
      <Form.Item label="Send on the" {...formItemLayout} validateStatus={getStatus(formError, 'dateTime')}>
        <DatePicker
        style={{ minWidth: '300px'}}
        format={DATE_TIME_FORMAT}
          onChange={handleDateChange}
          defaultValue={formState.dateTime}
          showTime={{ defaultValue: moment('00:00:00', DATE_TIME_FORMAT) }}
        />
      </Form.Item>
      <Form.Item label="Message" {...formItemLayout} validateStatus={getStatus(formError, 'message')}>
        <Input.TextArea placeholder="message" onChange={messageOnChange} rows={6} />
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
