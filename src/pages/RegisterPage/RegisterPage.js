import React from "react";
import Register from "../../components/Register/Register";
import loginImage from "../../assets/images/login.png";

export default function RegisterPage() {
    return (
        <div style={{ display: "flex" }}>
            <Register />
            <img
                style={{ maxHeight: "100vh", width: "50vw" }}
                src={loginImage}
                alt="Login cover"
            />
        </div>
    );
}
