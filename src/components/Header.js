import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="headerFooter">
            <nav className='Navi'>
                <p className="fontPlayfair">DRINKS&CHILL</p>
                <Link to="/">MENU</Link>
            </nav>
            <article>
                <h1 className="fontPlayfair">Cocktails & Getränke</h1>
                <p>HERZLICH WILLKOMMEN IN DER WELT DER COCKTAILS UND GETRÄNKE</p>
                <div>
                    <input type="text" name="" id="" placeholder='type something' />
                    <input className="button" type="button" value="SEARCH" />
                </div>
            </article>
        </header>
    );
}

export default Header;