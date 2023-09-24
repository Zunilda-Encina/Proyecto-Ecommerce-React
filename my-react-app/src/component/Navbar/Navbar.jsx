import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../search/SearchBar.jsx';
import './navbar.css'
// import '../../App.css'
// import   '../../assets/css/style.css'
import ModelosDeZapatillas from '../Api/zapasApi.jsx';

const NavBar = ({ user, setUser, modelos }) => {
  return (
      <header> 
          <div className ="allNavBox" >
            <div className='logoBox'>
              <img className='imgLogo' src="https://cdn.discordapp.com/attachments/1154158862199435424/1154158885733675110/LOGOJORDAN_001.png" alt="LOGO" />
              <h1>ZAPAS FACHERAS</h1>
            </div>

            <div className='navBox'>
              <Link to='/' className='itemNav' >Home </Link>
              <Link to='/Productos' className="itemNav" > Productos</Link>
              {/* <Link to='/Login' className='itemNav'>Login</Link> */}
            </div>

            <div className='searchBox'>
              <SearchBar modelos={modelos} />
            </div> 
                   
          </div>
      </header>
  );
}

export default NavBar;
