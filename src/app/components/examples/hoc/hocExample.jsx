import React from "react";
import Component from "./someComponent";

import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
import withLogin from "./whithLogin";
import withPropStyles from "./withPropStyles";
const HOCExample = () => {
    const ComponentWithAuth = withLogin(Component);
    const ComponentWithPropstyles = withPropStyles(Component);
    const NewComponent = withPropStyles(ComponentWithAuth);
    return (
        <>
            <CardWrapper>
                <SmallTitle>1. Обычный компонент</SmallTitle>
                <Divider />
                <Component />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>2. Функциональный HOC</SmallTitle>
                 <Divider/>
                 <ComponentWithAuth/>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>3. HOC With Styles and Props</SmallTitle>
                <ComponentWithPropstyles/>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>4. Composed HOC</SmallTitle>
                <Divider/>
                <NewComponent/>
            </CardWrapper>
        </>
    );
};

export default HOCExample;
