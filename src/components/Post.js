import React, { Component } from "react";
import axios from "axios";
class Post extends Component {
  state = {
    post: null
  };

  componentDidMount() {
    axios
      .get(
        `https://jsonplaceholder.typicode.com/posts/${
          this.props.match.params.postId
        }`
      )
      .then(res => {
        this.setState({
          post: res.data
        });
      });
  }
  render() {
    const post = this.state.post ? (
      <div className="post">
        <h4 className="center">{this.state.post.title}</h4>
        <p>{this.state.post.body}</p>
      </div>
    ) : (
      <div className="center">Waiting for data</div>
    );
    return <div className="container">{post}</div>;
  }
}

export default Post;
