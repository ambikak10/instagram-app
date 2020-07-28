import React, { Component } from 'react';
import "./follow.css";
import { Link } from "react-router-dom";
import FollowItem from './FollowItem';
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Followers extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { isToggleOn: true };

  //   this.handleClick = this.handleClick.bind(this);
  // }

  // handleClick() {
  //   this.setState(function (prevState) {
  //     return { isToggleOn: !prevState.isToggleOn };
  //   });
  // }

  render() {
     const {auth} = this.props;

     if (!this.props.showFollowers) {
       return null;
     }
     const {followers, following} = this.props;
     const followingList= following.map(profile => profile.user);
     let content;
     if (followers.length > 0) {
       content = followers.map(follower => {
        if (auth.user.id === follower.user) {
          return (<FollowItem key={follower.id} follow={follower} followingList={followingList} isCurrent={true}/>)
        } else {
          return (<FollowItem key={follower.id} follow={follower} followingList={followingList} isCurrent={false}/>)
        }
       }
      )
     }
    return (
      <div className='first'>
        <div className='second'>
          <div className='third'>
            <div className='followers-container'>
              <h5>Followers </h5>
              <span>
                <Link onClick={this.props.close} class='X'>
                  X
                </Link>
              </span>
              <hr />

              <div className='container scrolling'>
                <div
                  className='row '
                  // style={{ marginBottom: "10px" }}
                  // style={{position: "relative"}}
                >
                  {content}
                </div>
              </div>
              {/* followers-container ends */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ 
  auth: state.auth
});
export default connect(mapStateToProps)(Followers);