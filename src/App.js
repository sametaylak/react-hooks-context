import React from 'react';

import routes from './routes';
import Store from './store';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Store>
      <Router>
        <Link className="link" to="/">Fruits</Link>
        <Link className="link" to="/vegetables">Vegetables</Link>
        {routes.map(r => {
          return <Route path={r.path} component={r.component} exact={r.exact} />
        })}
      </Router>
    </Store>
  );
}

export default App;
