import React from 'react';
import faker from 'faker';

const Post = props => {
  // console.log(porps);
  return (
    <div className='card'>
      <div className='image'>
        <img src={faker.image.avatar()} />
      </div>
      <div className='content'>
        <div className='header'>{props.user.name}</div>
        <div className='description'>{props.post.title}</div>
      </div>
      {/* <div className='extra content'>
        <span className='right floated'>{faker.date.past()}</span>
      </div> */}
    </div>
  );

  // return <div>Test</div>;
};

export default Post;
