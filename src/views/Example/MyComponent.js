
import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {

    state = {

        arrJobs: [
            { id: 'abcJob1', title: 'Developers', salary: '100' },
            { id: 'abcJob2', title: 'Testers', salary: '200' },
            { id: 'abcJob3', title: 'Project managers', salary: '300' }

        ]

    }
    addNewJob = (job) => {

        console.log('check job', job)
        // let currenJob = this.state.arrJobs;
        // currenJob.push(job)
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
            // arrJobs: currenJob
        })

    }
    DeleteJob = (job) => {
        let currenJob = this.state.arrJobs;
        currenJob = currenJob.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currenJob
        })
    }

    render() {
        console.log('check state', this.state)
        return (
            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />
                <ChildComponent

                    arrJobs={this.state.arrJobs}
                    DeleteJob={this.DeleteJob}
                />
            </>
        )


    }

}
export default MyComponent;