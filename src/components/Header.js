import React from "react";
import PropTypes from "prop-types";

const Heared = ({ text, bgColor, textColor }) => {
  return (
    <header>
      <div>
        <h2>Привіт, Всесвіте!</h2>
      </div>
    </header>
  );
};

Heared.defaultProps = {
  text: "Hello",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6095",
};

Heared.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Heared;
