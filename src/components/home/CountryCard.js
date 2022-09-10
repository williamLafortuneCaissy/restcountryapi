const CountryCard = ({country}) => {
    console.log(country)
    return (
        <div className="countryCard">
            <img className="countryCard__img" src={country.img} alt={`${country.name}'s flag`} />
            <div className="countryCard__body">
                <h2 className="countryCard__title">{country.name}</h2>
                <div className="countryCard__info">
                    <span className="countryCard__label">Population: </span>
                    <span className="countryCard__value">{country.population}</span>
                </div>
                <div className="countryCard__info">
                    <span className="countryCard__label">Region: </span>
                    <span className="countryCard__value">{country.region}</span>
                </div>
                <div className="countryCard__info countryCard__info--spacerBottom">
                    <span className="countryCard__label">Capital: </span>
                    <span className="countryCard__value">{country.capital}</span>
                </div>
            </div>
        </div>
    );
}

export default CountryCard;