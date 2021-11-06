
/* ######  IMPORT / DECLARATION  ###### */
import React, { useState } from 'react';
import axios from 'axios';
/* #################################### */



/* #########   FONCTION   ############# */
const Countries = () => {
    
    const [data, setData] = useState([]);
    
    axios.get('https://restcountries.com/v3.1/all').then((result) => console.log(result))
    
    return (
        <div>{data}</div>
    );
};
/* #################################### */



/* ###########  EXPORT  ############### */
export default Countries;
/* #################################### */