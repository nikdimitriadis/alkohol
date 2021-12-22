import { NavLink, Outlet } from "react-router-dom";

const links = [
  {
    drink: "Gin",
    info: "Get all the Gin",
  },
  {
    drink: "Vodka",
    info: " It`s Vodka o`clock",
  },
  {
    drink: "Rum",
    info: "Get a bottle of Rum,yoho",
  },
  {
    drink: "Scotch",
    info: "So much I like to drink Scotch that sometimes I think my name is Igor Stra-whiskey.",
  },
  {
    drink: "Alkoholfrei",
    info: "Heute Abend darf es mal alkoholfrei sein. Einer muss am Ende ja den Taxifahrer spielen.",
  },
  {
    drink: "Random",
    info: "Lorem ipsum dolor",
  },
];

const Home = () => {
  return (
    <section>
      <section className="overviewItems">
        {links.map((link, index) => (
          <NavLink className={`${'overview'} ${`
          style${Math.floor((index % 6) + 1)}`} 
          `} key={index} to={`${link.drink}`}>
            < h2 > {link.drink}</h2>
            <p>{link.info}</p>
          </NavLink>
        ))
        }
      </section >

      <Outlet />
    </section >
  );
};

export default Home;
