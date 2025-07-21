import DumbLogo from '../../assets/dumbl.svg'
import './StartHeader.scss'
const StartHeader = () => {
    return (
        <header className="start-header">
            <div className="header-logo-cont">
                <img src={DumbLogo} alt="Dumbbell Logo" />
                <span className="app-name">FitPower</span>
            </div>
            <div className="header-but-cont">
                <button className='header-button'>Button 1</button>
                <button className='header-button'>Button 2</button>
                <button className='header-button'>Button 3</button>
                <button className='header-button'>Button 4</button>
            </div>
        </header>
    );
}
export default StartHeader;