import { Route, Routes, Navigate } from "react-router-dom";
import Testlink from "./components/Testlink";
// import CocktailDetails from "./components/CocktailDetails";
// import Gin from "./pages/Gin";
// import Vodka from "./pages/Vodka";
// import Rum from "./pages/Rum";
// import Scotch from "./pages/Scotch";
// import Free from "./pages/Free";
// import Random from "./pages/Random";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <>
      <MainRoutes />
    </>
    // <div>
    //   <div>
    //     <Testlink />
    //   </div>
    //   <main>
    //     <Routes>
    //       <Route path="/" element={<Navigate to="/home" />} />
    //       <Route path="/home" element={<h1>home</h1>} />
    //       <Route path="/gin" element={<Gin />} />
    //       <Route path="/gin/:id" element={<Gin />} />
    //       <Route path="/vodka" element={<Vodka />} />
    //       <Route path="/rum" element={<Rum />} />
    //       <Route path="/scotch" element={<Scotch />} />
    //       <Route path="/alkFree" element={<Free />} />
    //       <Route path="/random" element={<Random />} />
    //     </Routes>
    //   </main>
    // </div>
  );
}

export default App;
