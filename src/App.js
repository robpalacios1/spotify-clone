import React, { useEffect } from 'react'

/***** Components *****/
import Login from './components/Login'

/***** Spotify *****/
import { getTokenFromUrl } from './spotify'

/***** CSS *****/
import './App.css';


function App() {

  useEffect(() => {
    const token = getTokenFromUrl();
    console.log(token)
  }, [])

  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
