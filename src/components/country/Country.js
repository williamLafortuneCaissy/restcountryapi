import { faArrowLeft, faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CountriesContext from "../../context/countriesContext";
import Loader from "../Loader";

const Country = () => {
    const [country, setCountry] = useState(null);
    const countriesContext = useContext(CountriesContext)
    let { countryParam } = useParams();

    useEffect(() => {
        const filteredCountry = countriesContext.countries.find(country => country.slug === countryParam)
        setCountry(filteredCountry)
    }, [countriesContext, countryParam]);

    // list is the array of "item"
    // returns a string of every "item" seperated by a comma
    const getList = (list) => {
        return (
            list.map((item, i) => (
                <React.Fragment key={i}>  {/*add comma if not first */}
                    {i ? ',' : ''} {item}
                </React.Fragment>
            ))
        )
    }

    return (
        <div className="country container">
            <Link to="/" className="btn country__back">
                <FontAwesomeIcon className="btn-icon" icon={faArrowLeftLong} />
                Back
            </Link>
            <Loader
                isLoading={countriesContext.isLoading || !country}
                error={countriesContext.error}
            >
                {!!country &&
                    <div className="country__grid">
                        <img className="country__img flag-img" src={country.img} alt={`${country.name}'s flag`} />
                        <div>
                            <h2 className="country__title">{country.name}</h2>
                            <div className="country__info">
                                <div className="country__section">
                                    <div className="lh-big">
                                        <span className="fw-medium">Native Name: </span>
                                        <span>{country.name}</span>
                                    </div>
                                    <div className="lh-big">
                                        <span className="fw-medium">Population: </span>
                                        <span>{country.population}</span>
                                    </div>
                                    <div className="lh-big">
                                        <span className="fw-medium">Region: </span>
                                        <span>{country.region}</span>
                                    </div>
                                    <div className="lh-big">
                                        <span className="fw-medium">Sub Region: </span>
                                        <span>{country.subRegion}</span>
                                    </div>
                                    <div className="lh-big">
                                        <span className="fw-medium">Capital: </span>
                                        <span>{country.capital}</span>
                                    </div>
                                </div>
                                <div className="country__section">
                                    <div className="lh-big">
                                        <span className="fw-medium">Top Domain Level: </span>
                                        <span>{country.topDomainLevel}</span>
                                    </div>
                                    <div className="lh-big">
                                        <span className="fw-medium">Currencies: </span>
                                        <span>{getList(country.currencies)}</span>
                                    </div>
                                    <div className="lh-big">
                                        <span className="fw-medium">Languages: </span>
                                        <span>{getList(country.languages)}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="country__section borderCountries">
                                <h3 className="borderCountries__title">Border countries</h3>
                                {country.borderCountries.map(country => (
                                    <Link key={country} to={`/${country}`} className="btn borderCountries__btn">{country}</Link>
                                ))}
                            </div>
                        </div>
                    </div>
                }
            </Loader>
        </div>
    );
}

export default Country;