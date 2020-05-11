import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, profileIsFetching, updateUserStatus} from "../../Redux/profile-reducer";
import { withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.myUserId;
            if(!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} isFetching={this.props.isFetching}
                     status={this.props.status} updateUserStatus={this.props.updateUserStatus }/>
        );
    };
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching,
    status: state.profilePage.status,
    myUserId : state.auth.userId,
    isAuth : state.auth.isAuth,
});

export default compose(
    connect(mapStateToProps, {profileIsFetching, getUserProfile, getUserStatus, updateUserStatus }),
    withRouter,
     // withAuthRedirect,
)(ProfileContainer);

