import React from 'react';
import Header from "./Header";
import {logout} from "../../Redux/authorization/auth-reducer";
import {connect} from "react-redux";

class HeaderContainer extends React.Component {
    render() {
        return (
            <Header {...this.props} />
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    userId: state.auth.userId,
});


export default connect(mapStateToProps, {logout})(HeaderContainer);