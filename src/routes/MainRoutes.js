import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import LevelOne from "../pages/LevelOne";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<LevelOne />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
