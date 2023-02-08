import React from "react";
import PropTypes from "prop-types";

const Header = ({ text }) => {
  return (
    <header>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
};

Header.defaultProps = {
  text: "Опитувальник UI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6095",
};

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
