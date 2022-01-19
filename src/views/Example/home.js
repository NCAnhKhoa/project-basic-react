import React from "react";
import { withRouter } from "react-router";

import img from '../../assets/images/a.jpg';

class Home extends React.Component {
    render() {
        console.log('check props ', this.props)
        return (
            <>

                Đây Là Trang Chủ Home
                <div><img src={img} style={{ width: '400px', height: '400px' }}></img></div>
            </>
        )
    }

} export default withRouter(Home);