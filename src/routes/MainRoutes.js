import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import LevelOne from "../pages/LevelOne";
import Free from "../pages/Free";
import Random from "../pages/Random";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<LevelOne />} />
        <Route path="/free" element={<Free />} />
        <Route path="/random" element={<Random />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
