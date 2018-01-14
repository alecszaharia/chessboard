import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {WHITE, BLACK} from '../Chessboard'

class Piece extends Component {

    render() {
        const cssClasses = this.getCssClasses();
        return (
            <div className={cssClasses}></div>
        );
    }

    getCssClasses() {
        return classnames([
            'piece',
        ])
    }
}


Piece.propTypes = {};

export default Piece;
