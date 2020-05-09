import React from "react";

import Typography from "../components/typography";
import { Input } from "../components/form";
import { Container, Row, Col } from "../components/container";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const styles = {
  brand: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "20px",
    color: "#505050"
  },
  login: {},
  register: {}
};

const App = () => {
  const AUTH_USER = gql`
    {
      user {
        id
        firstName
        lastName
        phoneNumber
        role
      }
    }
  `;
  const { data, loading, error } = useQuery(AUTH_USER);

  if (loading) return <h1>Loading...</h1>;

  console.log(data);

  return (
    <Container header>
      <Row flex>
        <Col lg="2" sm="2">
          <img src="/assets/Logo.svg" width="100px" alt="mejik logo" />
        </Col>
        <Col lg="4" sm="7">
          <Input
            type="text"
            onChange={event => {
              console.log(event.target.value);
            }}
            placeholder="Search course here ..."
          />
        </Col>
        <Col lg="4" sm="1"></Col>
        <Col lg="2" sm="1">
          <Typography style={styles.brand}>My Course</Typography>
        </Col>
        <Col lg="1" sm="1">
          <img
            width="50px"
            src="/assets/profile.png"
            alt="mejik academy profile"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
