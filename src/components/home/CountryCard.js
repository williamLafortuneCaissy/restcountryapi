import { Link } from "react-router-dom";

const CountryCard = ({country}) => {
    // console.log(country)
    return (
        <Link to={country.slug} className="countryCard">
            <img className="flag-img " src={country.img} alt={`${country.name}'s flag`} />
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
    );
}

export default CountryCard;