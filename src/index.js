import React from 'react';
import ReactDOM from 'react-dom';
import Chessboard from './Chessboard';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <div style={{width: '700px'}}>
        <Chessboard fen={'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'}/>
    </div>
), document.getElementById('root'));
registerServiceWorker();
