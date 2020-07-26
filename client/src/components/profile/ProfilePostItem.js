import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./profile.css";

class ProfilePostItem extends Component {
  render() {
    return this.props.posts.map((post) => {
      return (
        <div>
          <div id="posts"className='col-lg-4 col-md-6 col-xs-12 col-xxs-12'>
            <Link to={`/post/${post._id}`}>
              <figure>
                <img src={post.image} alt='posts' />
              </figure>
            </Link>
          </div>
        </div>
      );
    });
  }
}

export default ProfilePostItem;