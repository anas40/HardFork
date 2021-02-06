import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import { Formik, Form as Fm, Field, ErrorMessage } from "formik";

export default function RegisterSeller() {
  const initialValues = {
    name: "",
    details: "",
  };

  return (
    <section>
      <div className="containerS">
        <div className="frame">
          <div className="nav">
            <ul className="links">
              <li className="signin-active">
                <a className="btn">Register yourself as a seller</a>
              </li>
            </ul>
          </div>
          <div className="formParent">
            <Formik initialValues={initialValues}>
              <Fm key={1} className="form-signin" name="form">
                <Form.Row>
                  <Form.Group as={Col} controlId="1">
                    <Form.Label>Business Name</Form.Label>
                    <Field
                      tabIndex="1"
                      type="text"
                      placeholder="Your business name"
                      name="name"
                      className="form-styling"
                    />
                    <ErrorMessage name="name" />
                  </Form.Group>
                </Form.Row>

                <Button className="btn btn-signup" tabIndex="5" type="submit">
                  Register
                </Button>
              </Fm>
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
}
