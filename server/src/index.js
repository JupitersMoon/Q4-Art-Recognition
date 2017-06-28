import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
// import Snapshot from './components/snapshot.js'
// import Navbar from './components/navbar.js'
// import Ajax from './components/api.js'

import {
  BrowserRouter as Router,
  // Route
} from 'react-router-dom';


class App extends React.Component{







// component links
render() {
  return(
    <Router>
    <div className="container">

      </div>
      </Router>
  )
}



}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
