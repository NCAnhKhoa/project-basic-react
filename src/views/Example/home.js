import React from "react";
import { withRouter } from "react-router";
class Home extends React.Component {
    render() {
        console.log('check props ', this.props)
        return (
            <>
                Đây Là Trang Chủ Home
            </>
        )
    }

} export default withRouter(Home);