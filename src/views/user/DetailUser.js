import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class DetailUser extends React.Component {
    state = {
        user: {}
    }
    handleback = () => {
        this.props.history.push(`/user`)
    }
    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;
            let res = await axios.get(`https://reqres.in/api/users/${id}`)

            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {}
            })


        }
    }
    render() {
        let { user } = this.state;
        let isEmptyObj = Object.keys(user).length === 0;
        return (<>
            <div>{this.props.match.params.id}</div>
            {isEmptyObj === false &&
                <>
                    <div>user:{user.first_name} - {user.last_name}</div>
                    <div>email:{user.email}</div>
                    <div>
                        <img src={user.avatar} />
                    </div>
                    <div>
                        <button onClick={() => this.handleback()}>back</button>
                    </div>
                </>
            }

        </>

        )
    }
} export default withRouter(DetailUser);