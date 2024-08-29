import NavBar from './components/NavBar'
import GifContainer from './components/GifContainer'
import GifSearch from './components/GifSearch'
import { handleFetch } from './utils';
import { useState, useEffect } from 'react';
import API_KEY from './config';

function App() {
  const [gif,setGif] = useState([]);
  const [error,setError] = useState('')
  
  useEffect(() => {
    const doFetch = async () => {
      const [data, error] = await handleFetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=3&rating=g`)
      console.log(data);
      if(data) setGif(gif.data);
      if(error) setError(error.message);
    }
    doFetch();
  }, [])
  return (
    <div>
      <NavBar color='black' title="Giphy Search" />
      <div className="ui container">
        <GifSearch />
        <br />
        <GifContainer gif = { gif }/>
      </div>
    </div>
  );
}

export default App;
