import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import {Link} from 'react-router-dom';


const Main = () => {
    return (
        <section>
            <Header />
            <Link to="/drinks">Drinks</Link>
            <Link to="/addyourcocktail">Add Cocktail</Link>
            <Footer />
        </section>
    );
}

export default Main;