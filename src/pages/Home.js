import { NavLink, Outlet } from "react-router-dom";

const links = ["Gin", "Vodka", "Rum", "Scotch", "Free", "Random"];

const Home = () => {
  return (
    <div>
      <div>asdds</div>
      {links.map((link, index) => (
        <NavLink key={index} to={`${link}`}>
          {link}
        </NavLink>
      ))}
      <Outlet />
    </div>
  );
};

export default Home;
