import React from 'react'


class ToDoListItem extends React.Component {
    constructor(props) {
        super(props);
    }

    getStyleTaskStatus(isCompleted) {
        return isCompleted ? { color: 'red', textDecoration: 'line-through' } : { color: 'green' };
    }
    buildTodoItem() {
        let sefl = this;
        let list = this.props.todos || [];
        return list.map(function (task, key) {
            let onClickDoneTaskFunc = sefl.DoneTask.bind(sefl, key, 'hello');
            let onClickRemoveFunc = sefl.removeNewTask.bind(sefl, key);
            return (
                <li key={key} style={sefl.getStyleTaskStatus(task.isComplete)}>
                    <span key={key} className='btn' onClick={onClickRemoveFunc}>X</span>
                    <span onClick={onClickDoneTaskFunc}>{task.name}</span>
                </li>
            )
        })
    }
    DoneTask(index, sayHello, e) {
        console.log(sayHello);
        let DoneTaskFunc = this.props.DoneTask;
        DoneTaskFunc(index);
    }
    removeNewTask(index, e) {
        let removeNewTaskFunc = this.props.removeNewTask;
        removeNewTaskFunc(index);
    }
    render() {
        return (
            <ul>
                {this.buildTodoItem()}
            </ul>
        );
    }

}

export default ToDoListItem