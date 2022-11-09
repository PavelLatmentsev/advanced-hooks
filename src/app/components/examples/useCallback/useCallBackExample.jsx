import React, { useState, useRef, useEffect, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const WithOutCallBack = useRef(0);
    const WithCallBack = useRef(0);
    const [data, setData] = useState({});
    const heandleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    // without callback
    const validateWithOutCallback = (data) => {
        console.log(data);
    };
    useEffect(() => {
        WithOutCallBack.current++;
    }, [validateWithOutCallback]);
    // with callback
    const validateWithCallback = useCallback((data) => {
        console.log(data);
    }, []);
    useEffect(() => {
        WithCallBack.current++;
    }, [validateWithCallback]);
    // --------------
    useEffect(() => {
        validateWithOutCallback(data);
        validateWithCallback(data);
    }, [data, validateWithOutCallback]);
    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>WithOutCallBack:{WithOutCallBack.current}</p>
            <p>WithCallBack:{WithCallBack.current}</p>
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                type="email"
                className="form-control"
                id="email"
                onChange={heandleChange}
                value={data.email || ""}
                name="email"
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
