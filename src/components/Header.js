import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <nav>
                <p>DRINKS&CHILL</p>
                <Link to="/">MENU</Link>
            </nav>
            <h1>Cocktails & Getränke</h1>
            <p>Herzlich Willkommen in der Welt der Cocktails und Getränke!
            </p>
            <div>
                <input type="text" name="" id="" />
                <input type="button" value="SEARCH" />
            </div>
        </header>
    );
}

export default Header;