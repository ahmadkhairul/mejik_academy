import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { Container } from "../components/container";
import { Form, Label, Input, Checkbox } from "../components/form";
import Button from "../components/button";

const style = {
  loginContainer: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#8854D0"
  },
  space: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    margin: "15px 0"
  },
  H1: {
    fontWeight: "500",
    fontSize: "36px",
    color: "#FFFFFF",
    margin: "10px 0"
  },
  H2: {
    fontSize: "18px",
    color: "#FFFFFF",
    opacity: "0.8",
    margin: "10px 0 20px"
  },
  forgotPwd: {
    color: "#FAC024",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px"
  },
  regHere: {
    color: "#FAC024",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",

    margin: "15px 0",
    textAlign: "center"
  },
  formInput: {
    width: "100%",
    height: "45px",
    backgroundColor: "#7b4cbc",
    paddingLeft: "10px",

    fontSize: "14px",
    color: "#ffffff"
  },
  formLabel: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "16px",
    color: "#ffffff",
    float: "left",
    margin: "15px 0 5px"
  }
};

const LOGIN_USER = gql`
  mutation login($email: EmailAddress!, $password: String) {
    login(input: { email: $email, password: $password }) {
      user {
        id
        firstName
        lastName
        email
        role
      }
      token
    }
  }
`;

const LOGIN = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState([]);
  const [login] = useMutation(LOGIN_USER);

  const postLogin = async () => {
    try {
      const data = await login({
        variables: {
          email: email,
          password: password
        }
      });
      return data;
    } catch (error) {
      return error;
    }
  };

  return (
    <Container style={style.loginContainer}>
      <img src="/assets/Logography.svg" />
      <h1 style={style.H1}>Login</h1>
      <h2 style={style.H2}>Login and start managing your learning process!</h2>
      {result}
      <Form
        onSubmit={async event => {
          event.preventDefault();
          let data = await postLogin();
          if (data.data) {
            setResult(
              `Welcome ${data.data.login.user.firstName} ${data.data.login.user.lastName}`
            );
            localStorage.setItem("token", data.data.login.token);
          } else {
            setResult("Username or Password Wrong");
          }
        }}
      >
        <Label style={style.formLabel}>Email</Label>
        <Input
          style={style.formInput}
          type="text"
          placeholder="e.g. najib@mail.com"
          onChange={event => {
            setEmail(event.target.value);
          }}
        />
        <Label style={style.formLabel}>Password</Label>
        <Input
          style={style.formInput}
          type="password"
          placeholder="input yout password"
          onChange={event => {
            setPassword(event.target.value);
          }}
        />
        <div style={style.space}>
          <Checkbox name="keep" label="Keep me signed in" />
          <Link to="forgot" style={style.forgotPwd}>
            Forgotten your password
          </Link>
        </div>
        <Button type="submit"> Login </Button>
        <Link to="register" style={style.regHere}>
          Don't you have an account yet? Register here
        </Link>
      </Form>
    </Container>
  );
};

export default LOGIN;
