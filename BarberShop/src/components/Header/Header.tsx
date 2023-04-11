import Navbar from '../Navbar/Navbar';
import './Header.scss';

const Header = () => {
    return ( 
        <div className="header">
            <div className="header--container">
                <div className="header--container--items">
                    <a href="/" className="logo">
                        <img src="https://wilsonkinyua.github.io/barber-shop-web-ui/img/logo.png" alt="logo"/>
                    </a>
                    <nav className="nav">
                        <Navbar/>
                    </nav>
                    <input className='button' value='Haz tu cita'/>
                </div>
            </div>
        </div>
    );
}
 
export default Header;