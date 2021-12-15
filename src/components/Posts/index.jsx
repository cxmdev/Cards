import React from 'react';
import './styles.css';
import { PostCard } from '../PostCard';
import P from 'prop-types';

export var Posts = function ({ posts }) {
    return (
        <div className="posts">
            {posts.map((post) => (
                <PostCard
                    key={post.id}
                    title={post.title}
                    body={post.body}
                    id={post.id}
                    cover={post.cover}
                    post={post}
                />
            ))}
        </div>
    );
};

Posts.defaultProps = {
    posts: [],
};

Posts.propTypes = {
    posts: P.array,
};
