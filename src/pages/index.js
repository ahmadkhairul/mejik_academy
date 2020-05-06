import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCourse } from "../_actions/course";
import { Container, Row, Col } from "../components/container";
import Typography from "../components/typography";

const styles = {
  card: {
    border: "1px solid #cccccc",
    boxShadow: "0px 0px 4px rgba(5, 5, 5, 0.08)",
    borderRadius: "4px",
    margin: "10px",
    height: "200px",
    width: "200px"
  },
  cover: {
    width: "100%",
    height: "80px",
    border: "1px solid #cccccc"
  },
  noCover: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "80px",
    border: "1px solid #cccccc",
    backgroundColor: "#f4f4f4"
  },
  noCoverText: {
    color: "white",
    textShadow: "2px 2px #8854D0"
  },
  title: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    lineHeight: "20px",
    color: "#050505"
  },
  description: {
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "12px",
    lineHeight: "16px",
    color: "#8A8C90"
  }
};

const App = ({ course, getCourse }) => {
  const { data, loading, error } = course;

  useEffect(() => {
    getCourse();
  }, []);

  return (
    <Container>
      <Row>
        {data.map((item, index) => (
          <Col style={styles.card} key={index} lg={2}>
            {item.cover ? (
              <img src={item.cover} alt={item.title} style={styles.cover} />
            ) : (
              <div style={styles.noCover}>
                <Typography style={styles.noCoverText}>{item.title}</Typography>
              </div>
            )}
            <p style={styles.title}>{item.title}</p>
            <p style={styles.description}>{item.description}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    course: state.course
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCourse: () => dispatch(getCourse())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
