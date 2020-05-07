import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MainPage } from './pages'
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={MainPage} />
        {/* <Route path="/login" component={Login} />
        <Route path="/menu" component={Menu} /> */}
      </Switch>
    </Router>
  );
}

export default App;
