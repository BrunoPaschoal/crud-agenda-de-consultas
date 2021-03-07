import React from 'react';
import './style.scss';
import HeartLogo from '../../assets/heart.svg'
import {Link} from 'react-router-dom'


const NavBar: React.FC = () => {
     
    return(
        <div className='nav-bar-container'>            
            <img src={HeartLogo} className='logo' alt="alt"/>           

            <div className='navba-menu'>
                <ul>
                    <li>
                        <Link to="/">CADASTRAR</Link>
                    </li>
                    <li>
                        <Link to="/list">CONSULTAS</Link>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default NavBar;