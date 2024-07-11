import React from "react";

const Container = ({ children, myValue }) => {
  return (
    <div>
      <h1>Esse é o título do container</h1>
      {children}
      <p>O valor é: {myValue}</p>
    </div>
  );
};

export default Container;
