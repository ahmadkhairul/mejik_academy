import React from "react";
import { Link } from "react-router-dom";

import { Container } from "../components/container";
import { Form, Label, Input, Checkbox } from "../components/form";
import Typography from "../components/typography";
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
  }
};

const App = () => {
  return (
    <Container style={style.loginContainer}>
      <img src="/assets/Logography.svg" />
      <h1 style={style.H1}>Login</h1>
      <h2 style={style.H2}>Login and start managing your learning process!</h2>
      <Form>
        <Label>Email</Label>
        <Input type="text" />
        <Label>Password</Label>
        <Input type="password" />
        <div style={style.space}>
          <Checkbox name="keep" label="Keep me signed in" />
          <Link to="forgot">
            <Typography style={style.forgotPwd}>
              Forgotten your password
            </Typography>
          </Link>
        </div>
        <Button type="submit"> Login </Button>
        <Typography style={style.regHere}>
          Don't you have an account yet? Register here
        </Typography>
      </Form>
    </Container>
  );
};

export default App;
