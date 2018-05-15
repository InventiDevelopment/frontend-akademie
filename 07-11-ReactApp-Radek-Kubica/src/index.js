import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter} from 'react-router-dom';
//import routes from './routes';
//import './styles/styles.css; webpack import css files
import './scss/app.css';
//import '../node_modules/boostrap/dist/css/boostrap.min.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

/*render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);*/

/*original implementation*/
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
