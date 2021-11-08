
/* ######  IMPORT / DECLARATION  ###### */
import React, { useEffect, useState } from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import axios from 'axios';
import Article from '../components/Article';
/* #################################### */



/* #########   FONCTION   ############# */
const News = () => {

    const [newsData, setNewsData] = useState([]);


    useEffect(() => {
        getData();
    }, [])

    const getData = () => {

        axios.get('http://localhost:3003/articles')
             .then(result => setNewsData(result.data))

    };

    return (

        <div className="news-container">
            <Logo />
            <Navigation />
            <h1>News</h1>
            <form>
                <input type="text" placeholder="Nom" />
                <textarea placeholder="Message"></textarea>
                <input type="submit" value="ENVOYER" />
            </form>
            <ul>
                {newsData.map((article) => (

                    <Article  key={ article.id } article={article} />

                ))}
            </ul>
        </div>
    );
};
/* #################################### */



/* ###########  EXPORT  ############### */
export default News;
/* #################################### */