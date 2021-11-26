import React from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./profile.css";

const Profile = () => {
    const userInfo = useSelector((state: RootStateOrAny) => state.login.user);
    const { user } = userInfo;

    return (
        <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
            <div className="card p-4">
                <div className=" image d-flex flex-column justify-content-center align-items-center">
                    <button className="btn btn-secondary">
                        <img
                            src={`${
                                user.image
                                    ? user.image
                                    : "https://i.imgur.com/wvxPV9S.png"
                            }`}
                            height="100"
                            width="100"
                            alt=""
                        />
                    </button>
                    <span className="name mt-3">{user.username}</span>
                    <span className="idd">@{user.bio}</span>
                    <div className="d-flex flex-row justify-content-center align-items-center mt-3">
                        <span className="number">
                            1069 <span className="follow">Followers</span>
                        </span>
                    </div>
                    <div className=" d-flex mt-2">
                        <Link to="/edit" className="btn1 btn-dark">
                            Edit Profile
                        </Link>
                    </div>
                    <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center">
                        <span>
                            <i className="fab fa-twitter"></i>
                        </span>
                        <span>
                            <i className="fab fa-facebook-square"></i>
                        </span>
                        <span>
                            <i className="fab fa-instagram"></i>
                        </span>
                        <span>
                            <i className="fab fa-linkedin"></i>
                        </span>
                    </div>
                    <div className=" px-2 rounded mt-4 date ">
                        <span className="join">Joined Nov,2021</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
