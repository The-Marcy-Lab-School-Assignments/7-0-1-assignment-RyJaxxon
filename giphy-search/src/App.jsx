import NavBar from './components/NavBar'
import GifContainer from './components/GifContainer'
import GifSearch from './components/GifSearch'
import { handleFetch } from './utils';
import { useState, useEffect } from 'react';
import API_KEY from './config';

function App() {
  const [gif,setGif] = useState([]);
  const [error,setError] = useState('')
  const [query, setQuery] = useState('');
  
  useEffect(() => {
    const doFetch = async () => {
      const endpoint = query
        ? `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&limit=3&rating=g`
        : `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=3&rating=g`;
      console.log(endpoint)
      const [data, error] = await handleFetch(endpoint)
      // console.log(data.data);
      if(data) setGif(data.data);
      if(error) setError(error.message);
    }
    doFetch();
  }, [query])
  return (
    <div>
      <NavBar color='black' title="Giphy Search" />
      <div className="ui container">
        <GifSearch setQuery = { setQuery }/>
        <br />
        <GifContainer gif = { gif }/>
      </div>
    </div>
  );
}

export default App;
