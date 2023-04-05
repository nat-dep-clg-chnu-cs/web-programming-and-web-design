import React from 'react';
import PropTypes from "prop-types";

const Button = ({children, version, type, isDisable}) => {
    return (
        <button type={type} disabled={isDisable} className={`feedback-btn feedback-btn-${version}`}>
            {children}
        </button>
    );
};

Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisabled: false,
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool

}

export default Button;
