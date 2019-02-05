import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Flaming from "../flaming.png";

class Home extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      this.setState({
        posts: res.data.slice(0, 10)
      });
    });
  }

  render() {
    const posts = this.state.posts.length ? (
      this.state.posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src={Flaming} alt="A flamingo" />
            <div className="card-content">
              <Link to={`/${post.id}`}>
                <span className="card-title">{post.title}</span>
              </Link>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">Waiting for data</div>
    );
    return (
      <div className="container home">
        <h4 className="center">Home</h4>
        <div>{posts}</div>
      </div>
    );
  }
}

export default Home;
