
import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {

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
        console.log('check state', this.state)
        return (
            <>
                <form >
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text"
                        value={this.state.Firstname}
                        onChange={(event) => this.HandleChangeFirstname(event)}
                    />
                    <br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text"
                        value={this.state.Lastname}
                        onChange={(event) => this.HandleChangeLastname(event)}
                    />
                    <br /><br />
                    <input type="submit" value="Submit"
                        onClick={(event) => this.HandleSubmit(event)}

                    />
                </form>
                <ChildComponent
                    name={this.state.Firstname}
                    age={this.state.Lastname}
                />
            </>
        )


    }

}
export default MyComponent;