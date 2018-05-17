import React from 'react'


class InputTDL extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showError: 0
        }
    }
    showError() {
        if (this.state.showError == 1) {
            return (<p style={this.getStyleError()}>Task is exist</p>);
        }
    }
    onCreated = () => {
        var createFunc = this.props.addNewTask;
        var data = {
            name: this.refs.NewTask.value,
            isComplete: 0,
        };
        var invalid = this.props.isExist(data.name);
        if (!invalid) {
            createFunc(data);
            this.setState({ showError: 0 });
        } else {
            this.setState({ showError: 1 });
        }
        return;
    }
    getStyleError() {
        return {
            margin: '10px 0px 0px 120px',
            color: 'red',
            border: '1px solid',
            padding: '2px 2px 2px 40px',
            width: '170px',
            background: '#f4dcdc'
        }
    }
    render() {
        return (
            <div className="form-group">
                <div className="col-md-4">
                    <div className="col-md-3" style={{ top: "5px" }}>
                        <label htmlFor="usr">Task:</label>
                    </div>
                    <div className="col-md-7">
                        <input type="text" className="form-control" id="usr" ref='NewTask' placeholder="input your task" />
                    </div>

                </div>
                <button className="btn btn-warning" onClick={this.onCreated}>Add</button>
                {this.showError()}
            </div >
        );
    }
}

export default InputTDL