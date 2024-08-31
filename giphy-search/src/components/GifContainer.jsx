function GifContainer({ gif }) {
    console.log(gif);
    return (
        <ul>
            {gif.map((pic) => (
                    <li key={pic.id}>
                        <img src={pic.images.original.url} alt={pic.url}></img>
                    </li>
                )
            )}

        </ul>
    )
}

export default GifContainer
