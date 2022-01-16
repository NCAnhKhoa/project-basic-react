import React from "react";
import './Listodos.scss';
import AddTodo from "./Addtodos";
import { toast } from 'react-toastify';

class Listodos extends React.Component {
    state = {
        Listodos: [
            { id: 'todo1', title: 'homeWork' },
            { id: 'todo2', title: 'video' },
            { id: 'todo3', title: 'bug' },
        ]
    }
    addNewtodo = (todo) => {
        this.setState({
            Listodos: [...this.state.Listodos, todo],
        })

        toast('🦄 Add thành công', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    DeleteNewtodole = (todo) => {
        let currentTodos = this.state.Listodos;
        currentTodos = currentTodos.filter(item => item.id !== todo.id)
        this.setState({ Listodos: currentTodos })
        toast.info("đã xóa");
    }

    render() {
        let { Listodos } = this.state;
        return (
            <div className="list-todo-contrainer">
                <AddTodo addNewtodo={this.addNewtodo} />
                <div className="list-todo-content">
                    {Listodos && Listodos.length > 0 &&
                        Listodos.map((item, index) => {
                            return (
                                <div className="todo-chid">
                                    <span>{index + 1} - {item.title}</span>
                                    <button className="edit">Edit</button>
                                    <button className="delete"
                                        onClick={() => this.DeleteNewtodole(item)}
                                    >Delete</button>
                                </div>
                            )
                        })

                    }

                </div>
            </div>
        )
    }
}
export default Listodos;