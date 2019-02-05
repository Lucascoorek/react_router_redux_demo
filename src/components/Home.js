import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  state = {
    posts: []
  };
  // componentDidMount() {
  //   axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
  //     this.setState({
  //       posts: res.data.slice(0, 10)
  //     });
  //   });
  // }

  render() {
    console.log(this.state.posts.length);
    const posts = this.state.posts.length ? (
      this.state.posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <span className="card-title">{post.title}</span>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">Waiting for data</div>
    );
    return (
      <div className="container">
        <h4 className="center">Home</h4>
        <div>{posts}</div>
      </div>
    );
  }
}

export default Home;
