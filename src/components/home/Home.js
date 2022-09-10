import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import uuid from "react-uuid";
import CountriesContext from "../../context/countriesContext";
import Loader from "../Loader";

const Home = () => {
    const [countries, setCountries] = useState([]);
    const [regions, setRegions] = useState([]);
    const [filter, setFilter] = useState('');

    const countriesContext = useContext(CountriesContext)

    useEffect(() => {
        setCountries(countriesContext.countries)

        let regionArray = []
        countriesContext.countries.map(country => {
            if(!regionArray.includes(country.region)) {
                regionArray = [...regionArray, country.region]
            }
        })
        regionArray = regionArray.sort()
        setRegions(regionArray)
    }, [countriesContext]);

    function handleFilter(event) {
        const selectedRegions = event.target.value
        if(selectedRegions) {
            setCountries(countriesContext.countries.filter(country => country.region === selectedRegions))
        } else {
            setCountries(countriesContext.countries)
        }
    }

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

                    <select
                        defaultValue=""
                        onChange={handleFilter}
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