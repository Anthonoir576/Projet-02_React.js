
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
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState(false);


    useEffect(() => {
        getData();
    }, [])

    
    // GET
    const getData = () => {

        axios.get('http://localhost:3003/articles')
             .then(result => setNewsData(result.data))

    };
    // POST
    const handleSubmit = (e) => {
    
        e.preventDefault();

        if (content.length < 20) {

            setError(true);

        } else if (author.trim().length < 3) {

            axios.post("http://localhost:3003/articles", {

                author: 'Anonyme',
                content: content,
                date: Date.now()
     
            }).then(() => {
                
                setError(false);
                setAuthor("");
                setContent("");
                getData();
                
            });

        } else {

            axios.post("http://localhost:3003/articles", {

                author: author,
                content: content,
                date: Date.now()
     
            }).then(() => {
                
                setError(false);
                setAuthor("");
                setContent("");
                getData();
                
            });

        };

    };



    return (

        <div className="news-container">
            <Logo />
            <Navigation />
            <h1>News</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input onChange={(e) => setAuthor(e.target.value)}
                       type="text" 
                       placeholder="Nom"
                       value={author} 
                />
                <textarea onChange={(e) => setContent(e.target.value)}
                          placeholder="Message"
                          value={content}
                          style={{border: error ? "3px solid red" : "3px solid #61dafb"}}
                >   
                </textarea>
                {error && <p>Veuillez écrire un minimum de 20 caractères ...</p>}
                <input type="submit" value="ENVOYER" />
            </form>
            <ul className="forum">
                {newsData
                    .sort((a, b) => b.date - a.date)
                    .map((article) => (

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