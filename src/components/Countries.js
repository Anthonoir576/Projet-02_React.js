
/* ######  IMPORT / DECLARATION  ###### */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
/* #################################### */



/* #########   FONCTION   ############# */
const Countries = () => {
    
    const [data, setData] = useState([]);
    

    useEffect(() => {

        axios.get('https://restcountries.com/v3.1/all')
             .then((result) => setData(result.data));

             

    }, []);
    

    return (
        <div className="countries">
            <ul className="contries-list">
                { data.map((country) => (

                    <li>{country.name.official}</li>

                ))}
            </ul>
        </div>
    );
};
/* #################################### */



/* ###########  EXPORT  ############### */
export default Countries;
/* #################################### */