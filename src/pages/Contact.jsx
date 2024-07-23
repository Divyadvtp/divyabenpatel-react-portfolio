import React, { useState } from "react";
import MyLocation from "../components/MyLocation";
import { Form, FormGroup, FormControl, Button } from "react-bootstrap";
// import "semantic-ui-css/semantic.min.css";
// import { Form, Input, TextArea, Button } from "semantic-ui-react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const SERVICE_ID = "service_pawvimg";
const TEMPLATE_ID = "template_n63m7fw";
const USER_ID = "6crFJCGJfTOz288Or";

function Contact({ pageRefs }) {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    console.log("e.target", e.target);
    const { name, email, message } = formData;

    const params = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    // e.target.reset();
    setFormData({ from_name: "", from_email: "", message: "" });
  };

  return (
    <section
      id="contact-section"
      className="contact-flex-container"
      ref={(el) => (pageRefs.current = { ...pageRefs.current, contact: el })}
    >
      <div className="flex-container">
        <div className="flex-item flex-child2">
          <div className="contact-form">
            <h1>Contact Me</h1>
            <p className="connection-line">
              If you would like to connect with me you can shoot me a message
              using the form below
            </p>
            <div className="main-form">
              <Form onSubmit={handleOnSubmit}>
                <FormGroup className="mb-3" controlId="formBasicName">
                  <Form.Label htmlFor="name">Name</Form.Label>
                  <FormControl
                    type="text"
                    name="from_name"
                    value={formData.from_name}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>

                <FormGroup controlId="formBasicEmail">
                  <Form.Label htmlFor="email">Email</Form.Label>
                  <FormControl
                    type="email"
                    name="from_email"
                    value={formData.from_email}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>

                <FormGroup controlId="formBasicMessage">
                  <Form.Label htmlFor="message">Message</Form.Label>
                  <FormControl
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    as="textarea"
                    rows={3}
                    required
                  />
                </FormGroup>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
              {/* onSubmit={handleOnSubmit} */}
              {/* <Form onSubmit={handleOnSubmit}>  
                <Form.Field
                  id="form-input-control-name"
                  control={Input}
                  label="Name"
                  name="user_name"
                  placeholder="Name…"
                  required
                />
                <Form.Field
                  id="form-input-control-email"
                  control={Input}
                  label="Email"
                  name="user_email"
                  placeholder="Email…"
                  required
                />
                <Form.Field
                  id="form-textarea-control-opinion"
                  control={TextArea}
                  label="Message"
                  name="user_message"
                  placeholder="Message…"
                  required
                />
                <Button type="submit" color="green" className="btn">
                  Submit
                </Button>
              </Form> */}
            </div>
          </div>
        </div>
        <div className="flex-item flex-child1">
          <MyLocation />
        </div>
      </div>
    </section>
  );
}

export default Contact;
