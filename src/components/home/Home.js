import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountryCard from "./CountryCard";

const Home = () => {
    const data = [
        {
            id: 234234,
            img: 'https://via.placeholder.com/500x300',
            name: 'Belgium',
            nativeName: 'Belgie',
            population: 345363,
            region: 'Europe',
            subRegion: 'Western Europe',
            capital: 'Brussels',
            topLevelDomain: '.be',
            currency: 'Euro',
            languages: ['Dutch', 'French', 'German'],
            borderCountries: ['France', 'Germany', 'Netherlands'],
        },
        {
            id: 2342234,
            img: 'https://via.placeholder.com/500x300',
            name: 'Belgium',
            nativeName: 'Belgie',
            population: 345363,
            region: 'Europe',
            subRegion: 'Western Europe',
            capital: 'Brussels',
            topLevelDomain: '.be',
            currency: 'Euro',
            languages: ['Dutch', 'French', 'German'],
            borderCountries: ['France', 'Germany', 'Netherlands'],
        },
        {
            id: 2342534,
            img: 'https://via.placeholder.com/500x300',
            name: 'Belgium',
            nativeName: 'Belgie',
            population: 345363,
            region: 'Europe',
            subRegion: 'Western Europe',
            capital: 'Brussels',
            topLevelDomain: '.be',
            currency: 'Euro',
            languages: ['Dutch', 'French', 'German'],
            borderCountries: ['France', 'Germany', 'Netherlands'],
        },
        {
            id: 2342334,
            img: 'https://via.placeholder.com/500x300',
            name: 'Belgium',
            nativeName: 'Belgie',
            population: 345363,
            region: 'Europe',
            subRegion: 'Western Europe',
            capital: 'Brussels',
            topLevelDomain: '.be',
            currency: 'Euro',
            languages: ['Dutch', 'French', 'German'],
            borderCountries: ['France', 'Germany', 'Netherlands'],
        }
    ]

    return (
        <div className="home">
            <div className="container">
                <div className="home__inputs">
                    <div className="search">
                        <div className="search__icon">
                            <FontAwesomeIcon icon={faSearch} />
                        </div>
                        <input className="search__input input" type="text" placeholder="Search for a country..."/>
                    </div>
                    <select className="filter input" name="" id="">
                        <option value="">Filter by Region</option>
                    </select>
                </div>
                <div className="home__grid">
                    {data.map( country => (
                        <CountryCard key={country.id} country={country} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;