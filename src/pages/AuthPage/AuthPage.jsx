import AuthTitle from "../../components/AuthPage/AuthTitle";
import AuthForm from "../../components/AuthPage/AuthForm";
import "./AuthPage.css";

const AuthPage = () => {
    return (
        <div className="auth-page">
            <AuthTitle />
            <AuthForm />
        </div>
    );
};

export default AuthPage;