import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";
import Component from "./childComponent";

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <ParantComponent>
            <Component >1</Component >
            <Component >2</Component >
            <Component >3</Component >
            </ParantComponent>
        </CollapseWrapper>
    );
};

export default ChildrenExercise;

const ParantComponent = ({ children }) => {
    return (React.Children.map(children, (child) => {
        const config = { ...child.props };
            return React.cloneElement(child, config);
    }));
};

ChildrenExercise.propTypes = {
    children: PropTypes.arrayOf((PropTypes.node), PropTypes.node)
};
