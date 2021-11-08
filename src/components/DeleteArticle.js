
/* ######  IMPORT / DECLARATION  ###### */
import axios from 'axios';
import React from 'react';
/* #################################### */



/* #########   FONCTION   ############# */
const DeleteArticle = ({ id }) => {

    const handleDelete = () => {

        axios.delete('http://localhost:3003/articles/' + id);
        window.location.reload();

    };


    return (
        <button onClick={() => {

            if (window.confirm('Voulez-vous supprimer votre article ?')) {
                handleDelete();
            }
            
        }}>
            
            Supprimer
        
        </button>
    );
};
/* #################################### */



/* ###########  EXPORT  ############### */
export default DeleteArticle;
/* #################################### */
