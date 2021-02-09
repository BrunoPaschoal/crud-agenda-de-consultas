import React from 'react';
import './style.scss';
import HeartLogo from '../../assets/heart.svg'


const NavBar: React.FC = () => {
     
    return(
        <div className='nav-bar-container'>            
            <img src={HeartLogo} className='logo' alt="alt"/>           

            <div className='navba-menu'>
                <ul>
                    <li>
                        <a href="/">CADASTRAR</a>
                    </li>
                    <li>
                        <a href="/list">CONSULTAS</a>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default NavBar;