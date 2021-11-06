
/* ######  IMPORT / DECLARATION  ###### */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
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

                    <Card country={country} key={country.name.official} />
                ))}
            </ul>
        </div>
    );
};
/* #################################### */



/* ###########  EXPORT  ############### */
export default Countries;
/* #################################### */