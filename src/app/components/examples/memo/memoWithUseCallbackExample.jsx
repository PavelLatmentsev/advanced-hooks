import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("initiate rerender(LogOutButton component)");
    });

    return (
        <>
            <button className="btn btn-primary" onClick={onLogOut}>
                {" "}
                LogOut{" "}
            </button>
        </>
    );
};
function areEquial(prevState, nextState) {
    if (prevState.onLogOut !== nextState.onLogOut) {
        return false;
    }
    return true;
}
const MemoizedLogoutComponent = React.memo(LogOutButton, areEquial);

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);

    const handleLogOut = useCallback(() => {
        console.log("LogOut");
        localStorage.removeItem("auth");
    }, [props]);
    return (
        <>
            <button
                className="btn btn-primary"
                onClick={() => setState(!state)}
            >
                initiate rerender
            </button>
            <MemoizedLogoutComponent onLogOut={handleLogOut} />
        </>
    );
};

LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};
export default MemoWithUseCallbackExample;
