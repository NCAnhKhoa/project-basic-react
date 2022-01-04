import React from "react";
import { ToastContainer, toast } from 'react-toastify';
class AddTodo extends React.Component {
    state = {
        title: '',
    }
    onchangetitle = (event) => {
        this.setState({
            title: event.target.value

        })
    }
    handleAddtodo = () => {
        if (!this.state.title) {
            toast.error("lỗi nhập kí tự vào");
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 101),
            title: this.state.title,
        }
        this.props.addNewtodo(todo)
    }
    render() {
        let { title } = this.state;
        return (
            <>
                <div className="add-todo">
                    <input type="text" value={title}
                        onChange={(event) => this.onchangetitle(event)} />
                    <button type="buntton" className="add"
                        onClick={() => this.handleAddtodo()}>Add</button>
                </div>
            </>


        )
    }
}
export default AddTodo;