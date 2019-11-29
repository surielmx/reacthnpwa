import React, { Component } from "react";
import { getStoryUser } from "../Actions/Actions";

class UserContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    const { match: { params: { user } } } = this.props;
    this.setUser(user);
  }

  setUser(user) {
    getStoryUser(user).then((data) => {
      this.setState({ user: data });
    });
  }

  render() {
    const { user } = this.state;

    return (
      (user && (
        <React.Fragment>
          <div style={{ margin: "30px 15px" }}>
            <p className="story-details_user">
              <span>
                <strong>${user.id}</strong>
                {` joined ${user.created}`}
              </span>
            </p>
            <p>{user.about}</p>
          </div>
        </React.Fragment>
      )) || <h1 style={{margin: "15px"}}>Loading user...</h1>
    );
  }
}

export default UserContainer;
