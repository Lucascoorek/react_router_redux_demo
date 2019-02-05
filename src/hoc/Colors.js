import React from "react";
const Colors = WrappedComponent => {
  const colors = ["red", "orange", "green", "blue", "yellow"];
  const randomColor = colors[Math.floor(Math.random() * 5)];
  const className = `${randomColor}-text`;

  return props => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Colors;
