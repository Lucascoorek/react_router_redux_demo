import React, { Component } from "react";
// import axios from "axios";
import { connect } from "react-redux";

class Post extends Component {
  //Axios:
  // state = {
  //   post: null
  // };

  // componentDidMount() {
  //   axios
  //     .get(
  //       `https://jsonplaceholder.typicode.com/posts/${
  //         this.props.match.params.postId
  //       }`
  //     )
  //     .then(res => {
  //       this.setState({
  //         post: res.data
  //       });
  //     });
  // }
  render() {
    const post = this.props.post ? (
      <div className="post">
        <h4 className="center">{this.props.post.title}</h4>
        <p>{this.props.post.body}</p>
      </div>
    ) : (
      <div className="center">Waiting for data</div>
    );
    return <div className="container">{post}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.postId;
  let post = state.posts.find(post => post.id === Number(id));
  return {
    post
  };
};
export default connect(mapStateToProps)(Post);
