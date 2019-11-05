import React from 'react';

const PostList = props => {
  return <div className='ui container cards'>{props.children}</div>;
};

export default PostList;
