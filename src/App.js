import React, { useState, useEffect } from 'react'

/***** Components *****/
import Login from './components/Login'

/***** Spotify *****/
import { getTokenFromUrl } from './spotify'

/***** CSS *****/
import './App.css';


function App() {

  const [token, setToken] = useState(null)

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token

    if(_token) {
      setToken(_token)
    }

  }, [])

  return (
    <div className="App">
      {
        token ? (
          <h1>Iam logged in</h1>
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
