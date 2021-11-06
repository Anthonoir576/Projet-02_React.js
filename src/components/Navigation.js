
/* ######  IMPORT / DECLARATION  ###### */
import React from 'react';
import { NavLink } from 'react-router-dom';
/* #################################### */



/* #########   FONCTION   ############# */
const Navigation = () => {
    
    return (

        <div className="navigation">
            <NavLink exact to="/">
                Accueil
            </NavLink>
            <NavLink exact to="/a-propos">
                À propos
            </NavLink>
        </div>
   
   
    );
};
/* #################################### */



/* ###########  EXPORT  ############### */
export default Navigation;
/* #################################### */
