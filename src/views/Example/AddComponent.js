import React from "react";
class AddComponent extends React.Component {
    state = {
        title: '',
        salary: '',
    }
    HandleChangetitleJob = (event) => {
        this.setState({
            title: event.target.value
        }
        )

    }
    HandleChangesalary = (event) => {
        this.setState({

            salary: event.target.value
        })

    }
    HandleSubmit = (event) => {
        event.preventDefault()
        if (!this.state.title || !this.state.salary) {
            alert('nononono')
            return;
        }
        console.log('>>>>check data ', this.state)
        this.props.addNewJob({
            id: Math.floor(Math.random() * 101),
            title: this.state.title,
            salary: this.state.salary
        })
        this.setState({
            title: '',
            salary: ''
        })

    }
    render() {
        return (
            <form >
                <label htmlFor="fname">Title:</label><br />
                <input type="text"
                    value={this.state.title}
                    onChange={(event) => this.HandleChangetitleJob(event)}
                />
                <br />
                <label htmlFor="lname"> Salary:</label><br />
                <input type="text"
                    value={this.state.salary}
                    onChange={(event) => this.HandleChangesalary(event)}
                />

                <br /><br />
                <input type="submit" value="Submit"
                    onClick={(event) => this.HandleSubmit(event)}

                />
            </form>
        )
    }
}
export default AddComponent;