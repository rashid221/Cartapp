import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import * as Yup from "yup";

const ComA = () => {
  const defaultValue = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirm_password: "",
    gender: "",
    termsconditions: false,
    transportMode: "",
  };
  const validationSchema = Yup.object().shape({
    firstname: Yup.string().min(4).required("please enter first name"),
    lastname: Yup.string().min(4).required("Please enter your last name"),
    email: Yup.string()
      .required("Please enter your email")
      .email("Please enter valid email"),
    password: Yup.string().min(6).required("Please enter your password").matches(/[a-z]/, "Password must be lowercase" ),
    confirm_password: Yup.string().required().oneOf([Yup.ref("password"),null],"password must be same"),
    gender: Yup.string().required("Select the option"),
    termsconditions: Yup.boolean().oneOf(
      [true],
      "Please accept terms and conditions"
    ),
    transportMode: Yup.string().required("Please select transport mode"),
  });
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Formik
        initialValues={defaultValue}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <div className="center-form">
                  <Form>
          <h3 className="text-light">Registration form</h3>
          <hr></hr>
          <label className="form-inline text-light">First Name</label>
          <Field name="firstname" className="form-control" type="text" />
          <p className="text-danger">
            <ErrorMessage name="firstname" />
          </p>
          <br></br>
          <label className="form-inline text-light">Last Name</label>
          <Field name="lastname" className="form-control" type="text" />
          <p className="text-danger">
            <ErrorMessage name="lastname" />
          </p>
          <br></br>
          <label className="form-inline text-light">Email</label>
          <Field name="email" className="form-control" type="email" />
          <p className="text-danger">
            <ErrorMessage name="email" />
          </p>
          <br></br>
          <label className="form-inline text-light">Password</label>
          <Field type="password" className="form-control" name="password" />
          <p className="text-danger">
            <ErrorMessage name="password" />
          </p>
          <br></br>
          <label className="form-inline text-light">Confirm Password</label>
          <Field
            type="password"
            className="form-control"
            name="confirm_password"
          />
          <p className="text-danger">
            <ErrorMessage name="confirm_password" />
          </p>
          <br></br>
          <Field component="select" name="gender" className="form-control">
            <option value="" disabled>
              Please Select
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Field>
          <p className="text-danger">
            <ErrorMessage name="gender" />
          </p>
          <br>
          </br>
          <br></br>
          <label className="text-light">
            <Field type="checkbox" name="termsconditions"></Field> Accept terms
            and conditions
          </label>
          <p className="text-danger">
            <ErrorMessage name="termsconditions" />
          </p>
          <br></br>
          <label className="text-light">
            <Field type="radio" name="transportMode" value='bike'></Field> Bike
          </label>
          <label className="text-light">
            <Field type="radio" name="transportMode" value='car'></Field> Car
          </label>
          <p className="text-danger">
            <ErrorMessage name="transportMode" />
          </p>
          <br></br>
          <br></br>
          <button type="submit" className="btn btn-light">Click here for register</button>
        </Form>
        </div>

      </Formik>
    </div>
  );
};

export default ComA;
