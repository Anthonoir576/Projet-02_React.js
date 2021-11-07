
/* ######  IMPORT / DECLARATION  ###### */
import React from 'react';
import { NavLink } from 'react-router-dom';
/* #################################### */



/* #########   FONCTION   ############# */
const Navigation = () => {

    return (

        <div className="navigation">
            <NavLink exact to="/" activeClassName="nav-active">
                Accueil
            </NavLink>
            <NavLink exact to="/news" activeClassName="nav-active">
                News
            </NavLink>
            <NavLink exact to="/a-propos" activeClassName="nav-active">
                À propos
            </NavLink>
        </div>
   
   
    );
};
/* #################################### */



/* ###########  EXPORT  ############### */
export default Navigation;
/* #################################### */
