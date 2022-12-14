import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CountriesContext from "../../context/countriesContext";
import Loader from "../Loader";

const Home = () => {
    const [countries, setCountries] = useState([]);
    const [regions, setRegions] = useState([]);
    const [filter, setFilter] = useState('');
    const [search, setSearch] = useState('');

    const countriesContext = useContext(CountriesContext)

    // init countries + regions
    useEffect(() => {
        setCountries(sortCountries(countriesContext.countries))

        let regionArray = []
        countriesContext.countries.forEach(country => {
            if(!regionArray.includes(country.region)) {
                regionArray = [...regionArray, country.region]
            }
        })
        regionArray = regionArray.sort()
        setRegions(regionArray)
    }, [countriesContext]);

    // filter countries based on search and filter
    useEffect(() => {
        let filteredCountries = countriesContext.countries;
        if(filter) {
            filteredCountries = filteredCountries.filter(country => country.region === filter)
        }
        if(search) {
            // compare country name and search lowercased
            filteredCountries = filteredCountries.filter(country => country.name.toLowerCase().includes(search.toLowerCase()))
        }
        setCountries(sortCountries(filteredCountries))
    }, [filter, search, countriesContext.countries]);

    // return the array of country sorted by population
    function sortCountries(countries) {
        return countries.sort((el1, el2) => el1.population < el2.population ? 1 : -1)
    }

    function handleInput(event) {
        const input = event.target

        if(input.name === 'filter') setFilter(input.value)
        if(input.name === 'search') setSearch(input.value)
    }

    return (
        <div className="home">
            <div className="container">
                <div className="home__inputs">
                    <div className="search">
                        <div className="search__icon">
                            <FontAwesomeIcon icon={faSearch} />
                        </div>
                        <input
                            className="search__input input"
                            type="text"
                            name="search"
                            placeholder="Search for a country..."
                            onChange={handleInput}
                            value={search}
                        />
                    </div>

                    <select
                        defaultValue=""
                        name="filter"
                        onChange={handleInput}
                        className="filter input"
                    >
                        <option value="" disabled hidden>Filter by Region</option>
                        <option value="">All Regions</option>
                        {regions.map(region => (
                            <option key={region} value={region}>{region}</option>
                        ))}
                    </select>
                </div>
                <Loader
                    isLoading={countriesContext.isLoading}
                    error={countriesContext.error}
                >
                    {!!countries &&
                        <div className="home__grid">
                            {countries.map( country => (
                                <Link key={country.id} to={country.slug} className="countryCard">
                                    <img className="countryCard__img" src={country.img} alt={`${country.name}'s flag`} width="320" height="192"/>
                                    <div className="countryCard__body">
                                        <h2 className="countryCard__title">{country.name}</h2>
                                        <div className="lh-big">
                                            <span className="fw-medium">Population: </span>
                                            <span>{country.population}</span>
                                        </div>
                                        <div className="lh-big">
                                            <span className="fw-medium">Region: </span>
                                            <span>{country.region}</span>
                                        </div>
                                        <div className="lh-big">
                                            <span className="fw-medium">Capital: </span>
                                            <span>{country.capital}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    }
                </Loader>
            </div>
        </div>
    );
}

export default Home;