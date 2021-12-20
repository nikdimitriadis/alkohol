import { NavLink, Outlet } from "react-router-dom";

const links = ["gin", "vodka", "rum", "ASSD"];

const Home = () => {
  return (
    <div>
      <div>asdds</div>
      {links.map((link) => (
        <NavLink to={`${link}`}>{link}</NavLink>
      ))}
      <Outlet />
    </div>
  );
};

export default Home;
