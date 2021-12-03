import React, {useState} from 'react';

function Post(){

    let [post] = useState({title: 'Titulo del post', content: 'Contenido del post', author: 'Juan Garcia', likes: 10}) // También se conoce como un hook de estado

    return(
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>{post.author}</p>
            <p>{post.likes}</p>
            <button>Like</button>
        </div>
    )
}

export default Post;