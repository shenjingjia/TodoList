import React from 'react';
import PropTypes from 'prop-types';

import './listItem.css';

class ListItem extends React.Component {
    changeComplete = () => {
        this.props.changeComplete(this.props.id);
    }
    render() {
        const {text, complete} = this.props;
        const cls = complete ? 'complete' : '';
        return (
            <React.Fragment>
                <div className="item">
                    <div className={`isComplete ${cls}`} onClick={this.changeComplete} />
                    <div style={complete ? {textDecoration : 'line-through', color: '#cecece'} : {} }>{text}</div>
                </div>
            </React.Fragment>
        )
    }
}

ListItem.PropTypes = {
    text: PropTypes.string.isRequired,
    complete: PropTypes.bool.isRequired,
    key: PropTypes.string,
    id: PropTypes.number.isRequired,
    changeComplete: PropTypes.func.isRequired
}

export default ListItem;