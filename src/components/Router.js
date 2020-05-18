import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TheaterPicker from './TheaterPicker';
import App from './App';
import NotFound from './NotFound';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={TheaterPicker} />
        <Route exact path="/theater/:theaterId" component={App} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
