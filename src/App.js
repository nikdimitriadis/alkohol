import MainRoutes from "./routes/MainRoutes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.scss";
import "./pages/LevelOne.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <MainRoutes />
      <Footer />
    </div>
  );
}

export default App;
