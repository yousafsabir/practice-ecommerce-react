import React from "react";
import { GoogleLogin } from "react-google-login";
import "./Signup.css";
const Signup = () => {
    const responseGoogle = (response) => {
        console.log(response);
    };
    return (
        <div className="signup-container">
            <div className="signup-outer">
                <div className="signup-inner">
                    <h2 className="signup-heading">Sign Up</h2>
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
                            className="signup-input"
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
                            className="signup-input"
                            name=""
                            id="password"
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
                            Repeat Password
                        </label>
                        <input
                            type="password"
                            className="signup-input"
                            name=""
                            id="password"
                        />
                    </div>
                    <button className="signup-button">Login</button>
                    <h3 className="signup-sub-heading">Or Sign up with</h3>
                    <GoogleLogin
                        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                        buttonText="Sign Up"
                        className="google-signup"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={"single_host_origin"}
                    />
                    <span>
                        Already have an account? <a href="/">Login here</a>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Signup;
