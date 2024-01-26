import { Login } from "../../components/Login/Login";
import loginImage from "../../assets/images/login.png";

export const LoginPage = () => {
    return (
        <div style={{ display: "flex" }}>
            <Login />
            <img
                style={{ maxHeight: "100vh", width: "50vw" }}
                src={loginImage}
            />
        </div>
    );
};
