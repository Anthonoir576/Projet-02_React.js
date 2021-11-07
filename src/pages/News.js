
/* ######  IMPORT / DECLARATION  ###### */
import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

/* #################################### */



/* #########   FONCTION   ############# */
const News = () => {
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
            <ul></ul>
        </div>
    );
};
/* #################################### */



/* ###########  EXPORT  ############### */
export default News;
/* #################################### */