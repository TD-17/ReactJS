import React,{useEffect} from "react";
import './App.css';

const App = () => {
 
  const APP_ID = '56f565f7';
  const APP_KEY = '280dbbe1db900ba64f3ed77158c7ab55';

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
    );
    const data = await response.json();
    console.log(data);
  }

  return(
    <div className = "App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  );
  }

export default App;
