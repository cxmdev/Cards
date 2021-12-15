/* export const PostCard = ({post}) => {
    //const post = props.post; //pode ser substituido pelo destructuring dentro do proprio props

    return (
        <div className = "post">
      <img src = {post.cover} alt={post.title} />
      <div key = {post.id} className = "post-content">
      <h1> {post.title}</h1>
       <p> {post.body} </p>
    </div>
    </div>
    )
} */
import P from 'prop-types';
import React from 'react';
import './styles.css';

export var PostCard = function ({ cover, id, title, body }) {
    return (
        <div className="post">
            <img src={cover} alt={title} />
            <div className="post-content">
                <h2>
                    {' '}
                    {title}
                    {id}
                </h2>
                <p> {body} </p>
            </div>
        </div>
    );
};

PostCard.propTypes = {
    title: P.string.isRequired,
    cover: P.string.isRequired,
    id: P.string.isRequired,
    body: P.string.isRequired,
};
