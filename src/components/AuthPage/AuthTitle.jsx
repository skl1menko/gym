import DumbLogo from '../../assets/dumbl.svg'
import './AuthTitle.scss'

const AuthTitle = () => {
    return (
        <div className="auth-title-container">
            <div className="logo-container">
                <div>
                    <img src={DumbLogo} alt="DumbLogo" />
                </div>
                <div>
                    <span className="app-name">FitPower</span>
                </div>
            </div>
            <div className="welcome-container">
                <div>
                    <span className="welcome-text">Welcome to FitPower</span>
                </div>
                <div>
                    <span className="subtitle">Your journey to fitness starts here</span>
                </div>
            </div>
        </div>
    );
};

export default AuthTitle;