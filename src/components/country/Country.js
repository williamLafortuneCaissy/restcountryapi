import { faArrowLeft, faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CountriesContext from "../../context/countriesContext";

const Country = () => {
    const [country, setCountry] = useState(null);
    const countriesContext = useContext(CountriesContext)
    let { countryParam } = useParams();

    useEffect(() => {
        console.log(countryParam)
        const filteredCountry = countriesContext.countries.find(country => country.slug === countryParam)
        setCountry(filteredCountry)
    }, [countriesContext]);


    const data = {
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
        currencies: ['Euro'],
        languages: ['Dutch', 'French', 'German'],
        borderCountries: ['France', 'Germany', 'Netherlands'],
    }

    // list is the array of "item"
    // returns a string of every "item" seperated by a comma
    const getList = (list) => (
        list.map((item, i) => (
            <React.Fragment key={i}>  {/*add comma if not first */}
                {i ? ',' : ''} {item}
            </React.Fragment>
        ))
    )

    return (
        <div className="country container">
            <Link to="/" className="btn country__back">
                <FontAwesomeIcon className="btn-icon" icon={faArrowLeftLong} />
                Back
            </Link>
            <div className="country__grid">
                <img className="country__img flag-img" src={data.img} alt={`${data.name}'s flag`} />
                <div>
                    <h2 className="country__title">{data.name}</h2>
                    <div className="country__info">
                        <div className="country__section">
                            <div className="lh-big">
                                <span className="fw-medium">Native Name: </span>
                                <span>{data.name}</span>
                            </div>
                            <div className="lh-big">
                                <span className="fw-medium">Population: </span>
                                <span>{data.population}</span>
                            </div>
                            <div className="lh-big">
                                <span className="fw-medium">Region: </span>
                                <span>{data.region}</span>
                            </div>
                            <div className="lh-big">
                                <span className="fw-medium">Sub Region: </span>
                                <span>{data.subRegion}</span>
                            </div>
                            <div className="lh-big">
                                <span className="fw-medium">Capital: </span>
                                <span>{data.capital}</span>
                            </div>
                        </div>
                        <div className="country__section">
                            <div className="lh-big">
                                <span className="fw-medium">Top Domain Level: </span>
                                <span>{data.topDomainLevel}</span>
                            </div>
                            <div className="lh-big">
                                <span className="fw-medium">Currencies: </span>
                                <span>{getList(data.currencies)}</span>
                            </div>
                            <div className="lh-big">
                                <span className="fw-medium">Languages: </span>
                                <span>{getList(data.languages)}</span>
                            </div>
                        </div>
                    </div>
                    <div className="country__section borderCountries">
                        <h3 className="borderCountries__title">Border countries</h3>
                        {data.borderCountries.map(country => (
                            <Link key={country} to={`/${country}`} className="btn borderCountries__btn">{country}</Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Country;