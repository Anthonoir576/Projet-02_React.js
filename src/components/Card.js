
/* ######  IMPORT / DECLARATION  ###### */
import React from 'react';
/* #################################### */



/* #########   FONCTION   ############# */
const Card = (props) => {

    const { country } = props;

    return (
        <li className="card">
            <img src={country.flags.png} alt="drapeau" />
            <div className="data-container">
                <ul>
                    <li>{ country.name.official }</li>
                    <li>Capital : '{ country.capital }'</li>
                    <li>{ country.population } Habitants</li>
                </ul>
            </div>
        </li>
        
    );
};
/* #################################### */



/* ###########  EXPORT  ############### */
export default Card;
/* #################################### */