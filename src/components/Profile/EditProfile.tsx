import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateUser } from "../../redux/user/actions";

const EditProfile = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [bio, setBio] = useState("");

    const dispatch = useDispatch();

    const userUpdate = useSelector((state: RootStateOrAny) => state.updateUser);
    const { loading, user, error } = userUpdate;

    const handleUpdateUser = (e: any) => {
        e.preventDefault();
        dispatch(updateUser({ username, email, bio }));
    };

    return (
        <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
            <div className="card p-4">
                <Link to="/">
                    <i className="fas fa-arrow-left"></i>
                </Link>
                <div className=" image d-flex flex-column justify-content-center align-items-center">
                    <span className="name mt-3">Edit Profile</span>
                    <form className="mt-2 formEdit" onSubmit={handleUpdateUser}>
                        <span className="lableEdit">Username:</span>
                        <input
                            type="text"
                            placeholder={user.user.username}
                            className="inputEdit"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <span className="lableEdit">Email:</span>
                        <input
                            type="email"
                            placeholder={user.user.email}
                            className="inputEdit"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <span className="lableEdit">Bio:</span>
                        <input
                            type="bio"
                            placeholder={user.user.bio}
                            className="inputEdit"
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                        />
                        {error && <Alert variant="danger">{error}</Alert>}
                        <button
                            className="btn1 btn-dark"
                            type="submit"
                            style={{ width: "100%" }}
                        >
                            {loading ? (
                                <i className="fa fa-spinner fa-spin" />
                            ) : (
                                "Update"
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditProfile;
