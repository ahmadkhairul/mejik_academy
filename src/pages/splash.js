import React from "react";

const style = {
  splashContainer: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "white"
  }
};

const App = () => {
  return (
    <div style={style.splashContainer}>
      <img src="/assets/Logo.svg" alt="mejik academy logo" width="200px" />
      <img
        src="/assets/loading.gif"
        alt="mejik academy loading"
        width="100px"
      />
    </div>
  );
};

export default App;
