import './App.scss';
import Nav from './components/Nav.js';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
      </Router>
      
    </div>
  );
}

export default App;
