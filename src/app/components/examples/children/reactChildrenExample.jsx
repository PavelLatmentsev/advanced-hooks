import React, { useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
import TextField from "../../common/form/textField";
import PropTypes from "prop-types";

const FormComponent = ({ children }) => {
    const [data, setData] = useState({});
    useEffect(() => {
    }, [data]);
    const heandleChange = (target) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };

    return React.Children.map(children, (child) => {
        const config = { ...child.props, onChange: heandleChange, value: data[child.props.name] || "" };
        return React.cloneElement(child, config);
    });
    };

    const ReactChildrenExample = () => {
    return (
        <CardWrapper>
            <SmallTitle>Clone form and add props</SmallTitle>
            <Divider/>
            <FormComponent>
             <TextField name="email" label="email"/>
             <TextField name="password" label="Пароль" type="password"/>
            </FormComponent>
        </CardWrapper>
    );
};
FormComponent.propTypes = {
    children: PropTypes.arrayOf((PropTypes.node), PropTypes.node)
};

export default ReactChildrenExample;
