import React from 'react';
import ReactDOM from 'react-dom';
import Chessboard from './Chessboard';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Chessboard />, document.getElementById('root'));
registerServiceWorker();
