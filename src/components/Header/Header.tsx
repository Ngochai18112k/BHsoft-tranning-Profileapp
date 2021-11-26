import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/user/actions";
import "./header.css";

const Header = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div className="header">
            <div className="headerWrapper">
                <div className="headerLeft">
                    <span className="headerLogo">BHSoft Profile</span>
                </div>
                <div className="headerRight">
                    <div className="headerRightAction">
                        <span
                            className="headerRightActionLink"
                            onClick={handleLogout}
                        >
                            Log out
                            <i
                                className="fas fa-arrow-right"
                                style={{ paddingLeft: "5px" }}
                            ></i>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
