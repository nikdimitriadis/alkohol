import './App.scss';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// Components & Pages
import Main from './pages/Main.js';
import OverviewDrink from './pages/OverviewDrink.js';
import AddYourCocktail from './pages/AddYourCocktail.js';

function App() {
  return (
    <div className="App">
      <Router>      
          <Routes>
            <Route path="/" element={<Main/>}></Route>
            <Route path="/drinks" element={<OverviewDrink/>}></Route>
            <Route path="/addyourcocktail" element={<AddYourCocktail/>}></Route>
          </Routes>   
      </Router>  
    </div>
  );
}

export default App;
