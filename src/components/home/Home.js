import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import uuid from "react-uuid";
import CountryGrid from "./CountryGrid";

const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [countries, setCountries] = useState([]);

    // set setCountries from storage || fetched data
    useEffect(() => {
        const today = new Date().getTime();
        const expiry = localStorage.getItem('countriesExpiry')

        if(expiry && today < expiry) {
            const storedCountries = JSON.parse(localStorage.getItem('countries')) || []
            setCountries(storedCountries)
        } else {
            fetchCountries()
        }
    }, []);

    async function fetchCountries() {
        setIsLoading(true)
        setError(null)

        try {
            const response = await fetch('https://restcountries.com/v3.1/all')

            if (!response.ok) throw new Error('Something went wrong!')
            const fetchedData = await response.json()

            console.log(fetchedData)

            const transformedCountries = []
            for (const key in fetchedData) {
                const countryData = {
                    id: uuid(),
                    slug: fetchedData[key].cca3,
                    img: fetchedData[key].flags.png,
                    name: fetchedData[key].name.common,
                    population: fetchedData[key].population,
                    region: fetchedData[key].region,
                    capital: fetchedData[key].capital,
                }
                transformedCountries.push(countryData)
            }

        setCountries(transformedCountries);

        localStorage.setItem('countries', JSON.stringify(transformedCountries))

        const today = new Date();
        const tomorrow = new Date(today. getFullYear(), today. getMonth(), today. getDate()+1).getTime();
        localStorage.setItem('countriesExpiry', tomorrow)

        } catch (error) {
            setError(error.message)
        }

        setIsLoading(false)
    }
    // const data = [
    //     {
    //         id: 234234,
    //         slug: 'country',
    //         img: 'https://via.placeholder.com/500x300',
    //         name: 'Belgium',
    //         nativeName: 'Belgie',
    //         population: 345363,
    //         region: 'Europe',
    //         subRegion: 'Western Europe',
    //         capital: 'Brussels',
    //         topLevelDomain: '.be',
    //         currency: 'Euro',
    //         languages: ['Dutch', 'French', 'German'],
    //         borderCountries: ['France', 'Germany', 'Netherlands'],
    //     },
    // ]

    let content;
    if(countries.length) content = <CountryGrid countries={countries}/>
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