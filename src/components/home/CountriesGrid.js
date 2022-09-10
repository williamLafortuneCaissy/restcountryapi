import { Link } from "react-router-dom";

const CountriesGrid = ({countries}) => {
    return (
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
    );
}

export default CountriesGrid;