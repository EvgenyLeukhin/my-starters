import React from 'react';
import Loadable from 'react-loadable';
import { Switch, Route } from 'react-router-dom';

import Loading from './../Loading';
// import fakeDelay from './../Loading/fakeDelay';

// import pages w/o react-loadable (if tiny content)
// import Home      from './../../pages/home';
import Form      from './../../pages/form';
import Form2     from './../../pages/form2';
import Page404   from './../../pages/404';

// react-loadable (https://github.com/jamiebuilds/react-loadable-example) https://habr.com/post/325688/
const loaderConstructor = path => {                         // (delayTime, path) - with fakeDelay
  return Loadable({
    // loader: () => fakeDelay(delayTime).then(() => path), // with fakeDelay
    loader: () => path,                                     // what need to load (dynamic import)
    loading: Loading,                                       // pre-loader component
  });
};

const pagesLoader = {
  // home:      () => loaderConstructor(500, import('./../../pages/home')),  // with fakeDelay
  home:      () => loaderConstructor(import('./../../pages/home')),
  redux:     () => loaderConstructor(import('./../../pages/redux')),
  bootstrap: () => loaderConstructor(import('./../../pages/bootstrap')),
  modal:     () => loaderConstructor(import('./../../pages/modal')),
};

const Routes = () => (
  <Switch>
    <Route exact path='/'    component={pagesLoader.home()} />
    <Route path='/redux'     component={pagesLoader.redux()} />
    <Route path='/bootstrap' component={pagesLoader.bootstrap()} />
    <Route path='/modal'     component={pagesLoader.modal()} />
    <Route path='/form'      component={Form} />
    <Route path='/form2'     component={Form2} />
    <Route                   component={Page404} />
  </Switch>
);

export default Routes;
