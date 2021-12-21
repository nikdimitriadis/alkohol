import { NavLink, Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const links = [
  {
    drink: 'Gin',
    info: 'Get all the Gin'
  },
  {
    drink: 'Vodka',
    info: ' It`s Vodka o`clock'
  },
  {
    drink: 'Rum',
    info: 'Get a bottle of Rum,yoho'
  },
  {
    drink: 'Scotch',
    info: 'So much I like to drink Scotch that sometimes I think my name is Igor Stra-whiskey.'
  },
  {
    drink: 'Alkoholfrei',
    info: 'Heute Abend darf es mal alkoholfrei sein. Einer muss am Ende ja den Taxifahrer spielen.'
  },
  {
    drink: 'Zufall',
    info: 'Lorem ipsum dolor'
  }
];

const Home = () => {
  return (
    <section>
      <Header />
      <section className='overviewItems'>

        {links.map((link, index) => (
          <NavLink className='overview' key={index} to={`${link.drink}`}>
            <h2>{link.drink}</h2>
            <p>{link.info}</p>
          </NavLink>
        ))}

      </section>
      <Footer />
      <Outlet />
    </section>
  );
};

export default Home;
