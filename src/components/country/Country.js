import { faArrowLeft, faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CountriesContext from "../../context/countriesContext";
import CountryGrid from "./CountryGrid";

const Country = () => {
    const [country, setCountry] = useState(null);
    const countriesContext = useContext(CountriesContext)
    let { countryParam } = useParams();

    useEffect(() => {
        console.log(countryParam)
        const filteredCountry = countriesContext.countries.find(country => country.slug === countryParam)
        setCountry(filteredCountry)
    }, [countriesContext]);

    // TODO: make a loader component
    let content;
    if(country) content = <CountryGrid />
    if(countriesContext.isLoading) content = <p>Loading</p>
    if(countriesContext.error) content = <p>{countriesContext.error}</p>

    return (
        <div className="country container">
            <Link to="/" className="btn country__back">
                <FontAwesomeIcon className="btn-icon" icon={faArrowLeftLong} />
                Back
            </Link>

            {content}
        </div>
    );
}

export default Country;