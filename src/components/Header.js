import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header className="headerFooter">
            <nav>
                <p className="fontPlayfair">DRINKS&CHILL</p>
                <Link to="/">MENU</Link>
            </nav>
            <h1 className="fontPlayfair">Cocktails & Getränke</h1>
            <p>HERZLICH WILLKOMMEN IN DER WELT DER COCKTAILS UND GETRÄNKE</p>
            <div>
                <input type="text" name="" id="" />
                <input className="button" type="button" value="SEARCH" />
            </div>
        </header>
    );
}

export default Header;