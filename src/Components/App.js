import React from 'react';
import PostList from './PostList';
import Post from './Post';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      users: []
    };

    // this.getPostAxio();
  }

  getUser = async () => {
    const cevap = await Axios.get('https://jsonplaceholder.typicode.com/users');
    this.setState({ users: cevap.data });
    console.log('Get User çağrıldı');
  };

  getPostAxio = async () => {
    const cevap = await Axios.get('https://jsonplaceholder.typicode.com/posts');
    this.setState({ posts: cevap.data });
    console.log('Get Post çağrıldı');
  };

  // getPost = async () => {
  //   const cevap = await fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(response => response.json())
  //     .then(json => this.setState({ posts: json }));
  // };

  componentDidMount() {
    // this.getPost();
    this.getUser();
    this.getPostAxio();
  }

  renderList() {
    console.log(this.state.posts);
    console.log(this.state.users);
    if (this.state.posts === []) this.getPostAxio();
    if (this.state.users === []) this.getUser();
    const postlar = this.state.posts.map(post => {
      let user = this.state.users.find(user => user.id === post.userId);
      return <Post key={post.id} post={post} user={user} />;
    });
    return postlar;
  }

  render() {
    // console.log(this.state.posts);
    return <PostList>{this.renderList()}</PostList>;
  }
}

export default App;
