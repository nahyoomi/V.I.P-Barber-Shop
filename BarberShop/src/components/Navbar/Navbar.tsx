import { NavLink } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
    return ( 
        <ul className="navlist">
            <li className="navlist--item">
                <NavLink to={'/'}>
                    Inicio
                </NavLink>
            </li>
            <li className="navlist--item">
                <NavLink to={'/'}>
                    Sobre Nosotros
                </NavLink>
            </li>
            <li className="navlist--item">
                <NavLink to={'/'}>
                    Servicios
                </NavLink>
            </li>
            <li className="navlist--item">
                <NavLink to={'/'}>
                    Paginas
                </NavLink>
            </li>
            <li className="navlist--item">
                <NavLink to={'/'}>
                    Contacto
                </NavLink>
            </li>
        </ul>
     );
}
 
export default Navbar;