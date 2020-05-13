import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {
    getUserProfile,
    getUserStatus,
    updatePhoto,
    updateUserStatus
} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.myUserId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
        document.title = "Профиль";
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return (
            <Profile {...this.props}
                     isOwner={!this.props.match.params.userId}
                     profile={this.props.profile}
                     isFetching={this.props.isFetching}
                     status={this.props.status}
                     updateUserStatus={this.props.updateUserStatus}
                     updatePhoto={this.props.updatePhoto}
                     isAvatarUpdating={this.props.isAvatarUpdating} />
        );
    };
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isFetching: state.profilePage.isFetching,
    status: state.profilePage.status,
    myUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
    isAvatarUpdating: state.profilePage.isAvatarUpdating
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, updatePhoto}),
    withRouter,
    // withAuthRedirect,
)(ProfileContainer);

