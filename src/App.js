
import { Route, Routes } from 'react-router-dom';
import './assets/scss/style.scss';
import Country from './components/country/Country';
import Header from './components/header/Header';
import Home from './components/home/Home';
function App() {
    return (
        <div className="app">
            <Header />
            <div className="app__content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/:country" element={<Country />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
