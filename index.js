import React, { Component, Suspense, lazy  } from 'react';
import { render } from 'react-dom';
import { Container } from 'reactstrap';
import Header from './Components/Header/Header';
import { BrowserRouter,HashRouter, Router, Route, Switch } from 'react-router-dom';

const Home = lazy(() => import('./Components/Home/Home'));
const List = lazy(() => import('./Components/List/List'));
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
        <HashRouter>
          <Header/>
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/list" component={List}/>
            </Switch>
          </Suspense>
        </HashRouter>
    );
  }
}

render(<App />, document.getElementById('root'));
