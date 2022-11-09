import React from "react";
import PropTypes from "prop-types";

const Component = ({ children }) => {
    console.log(children);
    return (
    <div>
        {children}.Компонент списка
    </div>);
};
export default Component;

Component.propTypes = {
    children: PropTypes.string
};
