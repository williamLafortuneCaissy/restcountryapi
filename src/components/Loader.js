const Loader = ({isLoading, error, children}) => {

    let content = children
    if(isLoading) content = <p>Loading</p>
    if(error) content = <p>{error}</p>

    return (
        <>
            {content}
        </>
    );
}

export default Loader;