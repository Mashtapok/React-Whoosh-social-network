import React from "react";
import {connect} from "react-redux";
import {
    follow, requestUsers,
    setCurrentPage, toggleIsFollowing, unfollow,
} from "../../Redux/users-reducer";
import Users from "./Users";
import {compose} from "redux";
import {
    getUsers,
    getCurrentPage,
    getIsFetching,
    getIsFollowing,
    getPagesize,
    getTotalUsersCount
} from "../../Redux/users-selectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.requestUsers(currentPage, pageSize);
        document.title = "Пользователи";
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.requestUsers(pageNumber, pageSize);
    };

    render() {
        return (
            <>
                <Users totalUsersCount={this.props.totalUsersCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       isFetching={this.props.isFetching}
                       isFollowing={this.props.isFollowing}
                />
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPagesize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        isFollowing: getIsFollowing(state)
    }
};

export default compose(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleIsFollowing, requestUsers}),
    // withAuthRedirect,
)(UsersContainer);