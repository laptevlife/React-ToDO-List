import React from 'react';
// import ReactDOM from 'react-dom';
import './TodoListItem.css'
class TodoListItem extends React.Component {

    

    render() {
        const { label, id, onDeleted, onToggleDone, onToggleImportant, important, done } = this.props;

        // const {done, important}=this.state;

    

        let classNames = 'list-group-item';
        if (done) {
            classNames += ' done '
        }
        if (important) {
            classNames += ' important'
        }

        return (
            <span className={classNames }>
            <span   onClick={onToggleDone}> {id} {label} </span>
                <span className="right">
                    <button className="btn  btn-items"
                    onClick={onDeleted }>
                        <i className="fa fa-trash-o fa-lg"></i>
                    </button>
                    <button className="btn btn-items"
                    onClick={ onToggleImportant}>
                        <i className="fa fa-exclamation fa-lg"></i>
                    </button>
                </span>
            </span>
        )
    }
}


export default TodoListItem;

    // const style = {
        //     color: important ? 'steelblue' : "black",
        //     fontWeight: important ? 'bold' : 'normal',
        // }