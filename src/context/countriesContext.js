import { createContext, useEffect, useState } from 'react'
import uuid from 'react-uuid';

// this is the default context value. the only reason why we would want to set values is for the vvscode autocomplete.
const CountriesContext = createContext({
    isLoading: false,
    error: null,
    countries: [],
    setCountries: () => {},
})

// AuthContextProvider is only usefull to make our code cleaner. we could still use AuthContext.Provider in app.js
export const CountriesContextProvider = ({children}) => {
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

                // transform an object into an array of the given property (or the actual value)
                function getArray(object, prop = null) {
                    let array = []

                    for (const key in object) {
                        if (Object.hasOwnProperty.call(object, key)) {
                            // get prop of the object || get the value
                            const value = prop ? object[key][prop] : object[key];

                            array = [...array, value]
                        }
                    }
                    return array
                }

                const countryData = {
                    id: uuid(),
                    slug: fetchedData[key].cca3,
                    img: fetchedData[key].flags.png,
                    name: fetchedData[key].name.common,
                    nativeName: fetchedData[key].name.official,
                    population: fetchedData[key].population,
                    region: fetchedData[key].region,
                    subRegion: fetchedData[key].subregion,
                    capital: fetchedData[key].capital,
                    topLevelDomain: fetchedData[key].tld,
                    currencies: getArray(fetchedData[key].currencies, 'name'),
                    languages: getArray(fetchedData[key].languages),
                    borderCountries: fetchedData[key].borders,
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

    return (
        <CountriesContext.Provider
            value={{
                countries: countries,
                setCountries: setCountries,
                isLoading: isLoading,
                error: error,
            }}
        >
            {children}
        </CountriesContext.Provider>
    )
}

export default CountriesContext