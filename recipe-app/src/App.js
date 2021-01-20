import logo from './logo.svg';
import './App.css';

const App = () => {
 
  const APP_ID = 'f6f7f8f9';
  const APP_KEY = 'hfdjsfiajdj8837583bjh78yyaw';

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`;

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
