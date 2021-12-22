import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import LevelOne from "../pages/LevelOne";
import Free from "../pages/Free";
import Random from "../pages/Random";
import SearchPage from "../pages/SearchPage";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<LevelOne />} />
        <Route path="/Alkoholfrei" element={<Free />} />
        <Route path="/random" element={<Random />} />
        <Route path="/search/:drinks" element={<SearchPage />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
