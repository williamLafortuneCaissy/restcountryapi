import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import uuid from "react-uuid";
import CountriesContext from "../../context/countriesContext";
import CountriesGrid from "./CountriesGrid";

const Home = () => {
    const [countries, setCountries] = useState([]);
    const countriesContext = useContext(CountriesContext)

    useEffect(() => {
        setCountries(countriesContext.countries)
    }, [countriesContext]);

    let content;
    if(countries.length) content = <CountriesGrid countries={countries}/>
    if(countriesContext.isLoading) content = <p>Loading</p>
    if(countriesContext.error) content = <p>{countriesContext.error}</p>

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