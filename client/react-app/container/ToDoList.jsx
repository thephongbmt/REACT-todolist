import React from 'react'
import InputTDL from '../components/InputTDL.jsx'
import ToDoListItem from '../components/ToDoListIterm.jsx'

const todos = [
    { name: 'Brush your teeth', isComplete: 0 },
    { name: 'Eat your breakfast', isComplete: 1 },
]


class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos,
        }
    }

    refreshData(data, isSort) {
        if (isSort) {
            data.sort(function (a, b) { return a.isComplete - b.isComplete })
        }
        this.setState(data);
    }

    isExist = (newTask) => {
        var exist = this.state.todos.find(function (task) {
            return task.name.trim().split(" ").join("") == newTask.trim().split(" ").join("");
        })
        return exist ? true : false;
    }
    addNewTask = task => {
        var data = this.state.todos;
        data.push(task);
        this.refreshData(data, true);

    }
    removeNewTask = (index) => {
        var data = this.state.todos;
        data.splice(index, 1);
        this.refreshData(data, false);
        console.log(index);
        return;
    }
    DoneTask = (index) => {
        var data = this.state.todos;
        if (data[index].isComplete == 0) {
            data[index].isComplete = 1;
        } else {
            data[index].isComplete = 0;
        }
        this.refreshData(data, true)
        return;
    }
    render() {
        return (
            <div>
				<span>Click on task to done task</span><br/>
				<span>click x for remove task</span>
                <InputTDL addNewTask={this.addNewTask} isExist={this.isExist} />
                <ToDoListItem todos={this.state.todos} DoneTask={this.DoneTask} removeNewTask={this.removeNewTask} />
            </div>
        )
    }
}

export default ToDoList;