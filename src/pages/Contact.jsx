import React from "react";
import MyLocation from "../components/MyLocation";
import { Form, FormGroup, FormControl, Button } from "react-bootstrap";

function Contact({ pageRefs }) {
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
            If you would like to connect with me you can shoot me a message using the form below
            </p>
            <div className="main-form">
              <Form>
                <FormGroup className="mb-3" controlId="formBasicName">
                  <Form.Label>Name</Form.Label>
                  <FormControl type="text" />
                </FormGroup>

                <FormGroup controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <FormControl type="email" />

                </FormGroup>

                <FormGroup controlId="formBasicMessage">
                  <Form.Label>Message</Form.Label>
                  <FormControl
                    as="textarea"
                    rows={3}
                    
                  />
                </FormGroup>

                <Button variant="primary" type="submit">
                  Submit 
                </Button>
              </Form>
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
