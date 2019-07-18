import * as React from "react";
import Header from "./header";
import { connect } from "react-redux";
import { getAuthUserData } from "../../redux/auth.reducer";


class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps;
mapStateToProps = state => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);
