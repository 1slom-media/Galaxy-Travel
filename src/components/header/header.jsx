import {Link} from 'react-router-dom';
import {FaBars,FaTimes} from 'react-icons/fa';
import './header.css';
import { useState } from 'react';

export const Header=()=>{
    const [click,setClick]=useState(false);
    const handleClick=()=>setClick(!click);

    const [color, setColor] = useState(false)
    const changeColor =() => {
        if(window.scrollY >= 100) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor);
    return(

        <div className={color ? 'header header-bg' : 'header'}>
            <Link to='/'><h1>1SLOM</h1></Link>
            <ul className={click?"header__list active":"header__list"}>
                <li className="header__item">
                    <Link className='header__link' to='/'>Home</Link>
                </li>
                <li className="header__item">
                    <Link className='header__link' to='/pricing'>Pricing</Link>
                </li>
                <li className="header__item">
                    <Link className='header__link' to='/training'>Training</Link>
                </li>
                <li className="header__item">
                    <Link className='header__link' to='/contact'>Contact</Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click?(<FaTimes size={20} style={{color:'#fff'}}/>):(<FaBars size={20} style={{color:'#fff'}}/>)} 
            </div>

        </div>
    )

}