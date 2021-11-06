
/* ######  IMPORT / DECLARATION  ###### */
import React from 'react';
/* #################################### */



/* #########   FONCTION   ############# */
const Card = (props) => {

    const { country } = props;

    const nombre = (x) => {

        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

    };

 
    return (
        <li className="card">
            <img src={country.flags.png} alt="drapeau" />
            <div className="data-container">
                <ul>
                    <li>{ country.name.official }</li>
                    <li>Capital : '{ country.capital }'</li>
                    <li>{ nombre(country.population) } Habitants</li>
                </ul>
            </div>
        </li>
        
    );
};
/* #################################### */



/* ###########  EXPORT  ############### */
export default Card;
/* #################################### */