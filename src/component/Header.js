import React from 'react'
import SearchIcon from "@material-ui/icons/Search";
import './Header.css';

function Header({inputVal, handleChange}) {
    return (
        <div className="Header_container">
            <div className="logo" >
                Stack OverFlow
            </div> 
            
            <div className="header__search">
                <input className="header__searchInput" type="text" value={inputVal} onChange={(e) => handleChange(e)} />
                <SearchIcon className="header__searchIcon" />
            </div>
            
        </div>
        
    )
}

export default Header
