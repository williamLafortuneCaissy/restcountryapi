import { useContext } from "react";
import CountriesContext from "../context/countriesContext";

const Loader = ({childrens}) => {
    const countriesContext = useContext(CountriesContext)

    let content;

    if(countriesContext.countries) content = {childrens}
    if(countriesContext.isLoading) content = <p>Loading</p>
    if(countriesContext.error) content = <p>{countriesContext.error}</p>

    return (
        {content}
    );
}

export default Loader;