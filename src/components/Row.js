import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class Row extends Component {

    render() {
        let classnames = this.getClassNames();
        return (
            <div className={classnames}>
                {this.props.children}
            </div>
        );
    }

    getClassNames() {
        return classnames([
            'row',
            'R'+(this.props.index +1)
        ])
    }
}

Row.propTypes = {
    index: PropTypes.number.isRequired,
    children: PropTypes.arrayOf(PropTypes.element).isRequired
};

export default Row;
