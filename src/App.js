import './App.scss';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// Components & Pages
import Main from './pages/Main.js';
import OverviewDrink from './pages/OverviewDrink.js';
// import AddYourTail from './pages/AddYourTail.js';

function App() {
  return (
    <div className="App">
      <Router>      
          <Routes>
            <Route path="/" element={<Main/>}></Route>
            <Route path="/drinks" element={<OverviewDrink/>}></Route>
            {/* <Route path="/addyourcocktail" element={<AddYourTail/>}></Route>  */}
          </Routes>   
      </Router>  
    </div>
  );
}

export default App;
