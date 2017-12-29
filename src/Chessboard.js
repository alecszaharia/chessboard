import React, {Component} from 'react';
import './chessboard.css';
import { FEN } from 'chesslib';

FEN.parse('asd');

class Chessboard extends Component {

    render() {

        var cells = [];

        for(var i=0;i<8;i++) {
            cells.push(<div className="cell">
                <div className="wrapper">
                    1
                </div>
            </div>);
        }

        var rows = [];

        for( i=0;i<8;i++) {
            rows.push(<div className="row">{cells}</div>);
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

export default Chessboard;
