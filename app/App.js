import React from 'react';
import {render} from 'react-dom';
import {Router, hashHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import routes from './config/routes';
require('./styles/app.less');

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

render(
  <Router history={hashHistory}>
    {routes}
  </Router>,
  document.querySelector("#app")
);
