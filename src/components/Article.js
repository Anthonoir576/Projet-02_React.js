
/* ######  IMPORT / DECLARATION  ###### */
import React from 'react';
import { useState } from 'react/cjs/react.development';
import axios from 'axios';
/* #################################### */



/* #########   FONCTION   ############# */
const Article = ({ article }) => {

    const [isEditing, setIsEditing] = useState(false);
    const [editContent, setEditContent] = useState('');

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

    // PUT
    const handleEdit = () => {

        const data = {

            author: article.author,
            content: editContent ? editContent : article.content,
            date: article.date

        };

        axios.put('http://localhost:3003/articles/' + article.id, data).then()

        setIsEditing(false);


    };

    return (

        <div className="article"
             style={{background: isEditing ? '#f3feff' : 'white'}}
        >
            <div className="card-header">
                <h3>{article.author}</h3>
                <em>Posté le {date(article.date)}</em>
            </div>
            {isEditing ? (
                <textarea 
                    onChange={(e) => setEditContent(e.target.value)} 
                    autoFocus 
                    defaultValue={editContent ? editContent : article.content}>
                </textarea>
            ) : (
                <p>{editContent ? editContent : article.content}</p>
            )}
            
            <div className="btn-container">
                {isEditing ? (
                    <button onClick={handleEdit}>Valider</button>
                    ) : (
                    <button onClick={() => setIsEditing(true)}>Modifier</button>
                )}
                
                <button>Supprimer</button>
            </div>
        </div>

    );
};
/* #################################### */



/* ###########  EXPORT  ############### */
export default Article;
/* #################################### */