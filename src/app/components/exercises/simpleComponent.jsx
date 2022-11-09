import React from "react";
import PropTypes from "prop-types";

export const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    return (
        <div>
            {isAuth ? (
                <button className="btn btn-primary" onClick={onLogOut}>
                    Выйти
                </button>
            ) : (
                <button className="btn btn-primary" onClick={onLogin}>
                    Войти
                </button>
            )}
        </div>
    );
};
SimpleComponent.propTypes = {
    onLogOut: PropTypes.func,
    onLogin: PropTypes.func,
    isAuth: PropTypes.string
};
