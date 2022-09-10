
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './assets/scss/style.scss';
import Country from './components/country/Country';
import Header from './components/header/Header';
import Home from './components/home/Home';
function App() {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => setDarkMode(prevMode => !prevMode)

    return (
        <div className={`app ${darkMode ? 'app--dark' : 'app--light'}`}>
            <Header toggleDarkMode={toggleDarkMode} />
            <div className="app__content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/:countryParam" element={<Country />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
