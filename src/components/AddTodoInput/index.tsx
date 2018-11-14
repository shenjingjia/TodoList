import React from 'react';
import PropTypes from 'prop-types';

class AddTodoInput extends React.Component {
    onKeyDown = (e) => {
        this.props.addTodo(e.target.value)
    }
    render () {
        return (
            <React.Fragment>
                <input
                    type="text"
                    placeholder="please add todoList"
                    onKeyDown={this.onKeyDown}
                />
            </React.Fragment>
        )
    }
}