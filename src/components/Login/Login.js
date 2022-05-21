import React from "react";
import { GoogleLogin } from "react-google-login";
import "./Login.css";

const Login = () => {
    const responseGoogle = (response) => {
        console.log(response);
    };
    return (
        <div className="login-container">
            <div className="login-outer">
                <div className="login-inner">
                    <h2 className="login-heading">Login In</h2>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.25rem",
                        }}
                    >
                        <label htmlFor="email" style={{ fontSize: "14px" }}>
                            Email
                        </label>
                        <input
                            type="email"
                            className="login-input"
                            name=""
                            id="email"
                        />
                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.25rem",
                        }}
                    >
                        <label htmlFor="password" style={{ fontSize: "14px" }}>
                            Password
                        </label>
                        <input
                            type="password"
                            className="login-input"
                            name=""
                            id="password"
                        />
                    </div>
                    <button className="login-button">Login</button>
                    <h3 className="login-sub-heading">Or login with</h3>
                    <GoogleLogin
                        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                        buttonText="Login"
                        className="google-login"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={"single_host_origin"}
                    />
                    <span>
                        Don't have an account? <a href="/">Sign up here</a>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Login;
