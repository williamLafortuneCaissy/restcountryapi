import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({toggleDarkMode}) => {
    return (
        <div className="header">
            <div className="header__container container">
                <h1 className="header__title">Where in the world?</h1>
                <button onClick={toggleDarkMode} className="header__toggler">
                    <FontAwesomeIcon icon={faMoon} /> dark mode
                </button>
            </div>
        </div>
    );
}

export default Header;