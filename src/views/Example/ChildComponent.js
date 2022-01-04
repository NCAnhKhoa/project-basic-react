
import React from "react";
import './Demo.scss'

class ChildComponent extends React.Component {

    state = {
        showJobs: false

    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    handleOnclickDetele = (job) => {
        console.log('handleOnclickDetele', job)
        this.props.DeleteJob(job)
    }


    render() {

        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';
        return (
            <>
                {showJobs === false ?
                    <div><button className="dtn-show"
                        onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div className="Job-lists">
                            {
                                arrJobs.map((item, _index) => {

                                    return (

                                        <div key={item.id}>
                                            {item.title} - {item.salary} <></>  <span onClick={() => this.handleOnclickDetele(item)}>x</span>


                                        </div>
                                    )

                                }
                                )

                            }

                        </div>
                        <div><button onClick={() => this.handleShowHide()}> Hilde</button></div>
                    </>
                }

            </>
        )


    }

}
/*
const ChildComponent = (props) => {
    let { arrJobs } = props;
    return (
        <>
            <div className="Job-lists">
                {
                    arrJobs.map((item, index) => {
                        if (+item.salary >= 200) {



                            return (

                                <div key={item.id}>
                                    {item.title} - {item.salary}$

                                </div>
                            )
                        }

                    })

                }

            </div>

        </>
    )

}*/

export default ChildComponent;