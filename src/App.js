import './App.scss';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

// Components & Pages
import Header from './components/Header.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
      </Router>
      
    </div>
  );
}

export default App;
