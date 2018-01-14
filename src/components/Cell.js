import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {WHITE, BLACK} from '../Chessboard'
import './cell.less';

class Cell extends Component {

    constructor(props) {
        super(props);
        this.state = {
            piece: props.color
        };
    }

    render() {
        const cssClasses = this.getCssClasses();
        const notations = this.getNotations();

        return (
            <div className={cssClasses}>
                <div className="wrapper">
                    {notations}
                    {this.props.children}
                </div>
            </div>
        );
    }

    getCssClasses() {
        return classnames([
            'cell',
            this.props.color === WHITE ? WHITE : BLACK,
            this.getAlgebraicPosition()

        ])
    }

    getNotations() {

        let notations = [];
        let position = this.props.position;

        if (position[1] === 0 || position[1] === 7) {
            notations.push(<div key={0} className={'notation notation-rank'}>{7-position[0] + 1}</div>)
        }

        if (position[0] === 0 || position[0] === 7 ) {
            notations.push(<div key={1} className={'notation notation-file'}>{String.fromCharCode(65 + position[1])}</div>)
        }

        return notations;
    }

    getFilesChar() {
        let position = this.props.position;
        return String.fromCharCode(65 + position[1])
    }

    getAlgebraicPosition() {
        return this.getFilesChar() + (this.props.position[1]+1);
    }
}


Cell.propTypes = {
    color: PropTypes.string.isRequired,
    position: PropTypes.array.isRequired,
};

export default Cell;
