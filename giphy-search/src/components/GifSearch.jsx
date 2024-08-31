function GifSearch({ setQuery }) {
    const handleInputChange = (event) => {
        console.log(event.target.value)
        setQuery(event.target.value);
    };
    return (
        <form>
            <label htmlFor="searchInput">Enter a Search Term </label>
            <input
                type="text" 
                className="form-control" 
                id="searchInput" 
                onChange={ handleInputChange }
            />
            <button type="submit" className="btn btn-success">Search</button>
        </form>
    )
}

export default GifSearch
