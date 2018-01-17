import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Cell from './components/Cell';
import Row from './components/Row';
import './chessboard.css';


export const WHITE = 'white';
export const BLACK = 'black';

class Chessboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            board: [
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0]
            ]
        };
    }

    render() {

        var cells = [];
        var rows = [];

        let color = WHITE;
        let rcolor = WHITE;
        for (var i = 0; i < 8; i++) {
            cells = [];
            for (var j = 0; j < 8; j++) {
                cells.push(<Cell key={j} color={color} position={[i,j]} piece={'wK'}/>);
                color = color === WHITE ? BLACK : WHITE;
            }

            rcolor = rcolor === WHITE ? BLACK : WHITE;
            color = rcolor;

            rows.push(<Row key={i} index={i}>{cells}</Row>);
        }

        return (
            <div className="chessboard">
                <div className="boardWrapper">
                    {rows}
                </div>
            </div>
        );
    }
}

Chessboard.propTypes = {
    fen: PropTypes.string.isRequired,
    orientation: PropTypes.oneOf([WHITE, BLACK]),
    onChange: PropTypes.func
};

export default Chessboard;
