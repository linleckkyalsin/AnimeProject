import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import axios from 'axios';


axios.get(" http://localhost:3000/sanctum/csrf-cookie")
ReactDOM.render(<App />, document.getElementById('root'));
