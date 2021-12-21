import MainRoutes from "./routes/MainRoutes";
import './App.scss'
import './pages/LevelOne.scss'
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='App'>
      <Header />
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
