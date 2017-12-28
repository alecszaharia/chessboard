import React, {Component} from 'react';
import './chessboard.css';

class Chessboard extends Component {
    render() {
        return (
            <div className="chessboard">
                <div className="boardWrapper">
                    <div className="row">
                        <div className="cell">1</div>
                        <div className="cell">2</div>
                        <div className="cell">3</div>
                        <div className="cell">4</div>
                        <div className="cell">5</div>
                        <div className="cell">6</div>
                        <div className="cell">7</div>
                        <div className="cell">8</div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Chessboard;
