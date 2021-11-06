
/* ######  IMPORT / DECLARATION  ###### */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';
/* #################################### */



/* #########   FONCTION   ############# */
const Countries = () => {
    
    const [data, setData] = useState([]);
    const [sortedData, setSortedData] = useState([]);
    const [playOnce, setPlayOnce] = useState(true);

    useEffect(() => {

        if (playOnce) {

            axios.get('https://restcountries.com/v3.1/all')
                 .then((result) => {
                
                    setData(result.data);
                    setPlayOnce(false);
            
                 });
        };

        const sortedCountry = () => {

            const countryObj = Object.keys(data).map((i) => data[i]);
            const sortedArray = countryObj.sort((a, b) => {

                return b.population - a.population;

            });
        };
        
        sortedCountry();

    }, [data]);
    

    return (
        <div className="countries">
            <ul className="countries-list">
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