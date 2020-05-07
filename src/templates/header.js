import React, { useEffect } from "react";
import { connect } from "react-redux";

import Typography from "../components/typography";
import { Input } from "../components/form";
import { Container, Row, Col } from "../components/container";
import { searchCourse } from "../_actions/course";
import { authUser } from "../_actions/auth";

const styles = {
  brand: {
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "14px",
    lineHeight: "20px",
    color: "#505050"
  }
};

const App = ({ user, authUser, searchCourse }) => {
  // const { data, loading, error } = user;

  useEffect(() => {
    authUser();
  }, []);

  // console.log(data);

  return (
    <Container header>
      <Row flex>
        <Col lg="2" sm="2">
          <img src="/assets/Logo.svg" width="100px" />
        </Col>
        <Col lg="4" sm="7">
          <Input
            type="text"
            onChange={event => {
              searchCourse(event.target.value);
            }}
            placeholder="Search course here ..."
          />
        </Col>
        <Col lg="4" sm="1"></Col>
        <Col lg="2" sm="1">
          <Typography style={styles.brand}>My Course</Typography>
        </Col>
        <Col lg="1" sm="1">
          <img width="50px" src="/assets/profile.png" />
        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    // user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authUser: () => dispatch(authUser()),
    searchCourse: search => dispatch(searchCourse(search))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
