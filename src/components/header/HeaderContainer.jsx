import * as React from "react";
import Header from "./header";
import * as axios from "axios";
import { connect } from "react-redux";
import { setUserDataAC } from "../../redux/auth.reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true,
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {login, id, email} = response.data.data;

                    this.props.setUserDataAC(login, id, email);
                }
                console.log(response);
            });
    }

    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps;
mapStateToProps = state => ({
    // profile: state.profilePage.profile,
});

export default connect(mapStateToProps, {setUserDataAC})(HeaderContainer);
