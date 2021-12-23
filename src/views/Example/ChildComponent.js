
import React from "react";


class ChildComponent extends React.Component {

    state = {
        Firstname: '',
        Lastname: ''

    }
    HandleChangeFirstname = (event) => {
        this.setState({
            Firstname: event.target.value
        }
        )

    }
    HandleChangeLastname = (event) => {
        this.setState({

            Lastname: event.target.value
        })

    }
    HandleSubmit = (event) => {
        event.preventDefault()
        console.log('>>>>check data ', this.state)

    }



    render() {
        console.log('check props', this.props)
        let name = this.props.name;
        let age = this.props.age;
        return (
            <>
                <div>
                    tên {name}
                    <br />
                    tuổi{age}
                </div>

            </>
        )


    }

}
export default ChildComponent;