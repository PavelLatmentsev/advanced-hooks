import React, { useState, useEffect } from "react";
import CardWrapper from "../common/Card";

export const withFunctions = (Component) => {
    return (props) => {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        setIsAuth(localStorage.getItem("auth"));
    });

    const onLogin = () => {
        localStorage.setItem("auth", "token");
    };

    const onLogOut = () => {
        localStorage.removeItem("auth");
    };

     return (
        <CardWrapper>
     <Component {...props} isAuth={isAuth} onLogin={onLogin} onLogOut={onLogOut} />
        </CardWrapper>
     );
    };
};
