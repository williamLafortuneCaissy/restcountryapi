
import './assets/scss/style.scss';
import Header from './components/header/Header';
import Home from './components/home/Home';
function App() {
    return (
        <div className="app">
            <Header />
            <div className="app__content">
                <Home />
            </div>
        </div>
    );
}

export default App;
