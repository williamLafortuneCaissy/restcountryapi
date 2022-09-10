import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import CountryGrid from "./CountryGrid";

const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        // fetchCountries()
    }, []);

    const data = [
        {
            id: 234234,
            slug: 'country',
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
            slug: 'country',
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
            slug: 'country',
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
            slug: 'country',
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

    let content;
    if(data.length) content = <CountryGrid countries={data}/>
    if(isLoading) content = <p>Loading</p>
    if(error) content = <p>{error}</p>

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

                {content}
            </div>
        </div>
    );
}

export default Home;