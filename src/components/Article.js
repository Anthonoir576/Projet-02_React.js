
/* ######  IMPORT / DECLARATION  ###### */
import React from 'react';
/* #################################### */



/* #########   FONCTION   ############# */
const Article = ({ article }) => {

    const date = (date) => {

        let newDate = new Date(date).toLocaleDateString('fr-FR', {

            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric"

        });

        return newDate;

    };

    return (

        <div className="article">
            <div className="card-header">
                <h3>{article.author}</h3>
                <em>Posté le {date(article.date)}</em>
            </div>
            <p>{article.content}</p>
            <div className="btn-container">
                <button>Modifier</button>
                <button>Supprimer</button>
            </div>
        </div>

    );
};
/* #################################### */



/* ###########  EXPORT  ############### */
export default Article;
/* #################################### */