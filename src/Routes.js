import React from 'react';
import {BrowserRouter as Router, Switch,Route,} from 'react-router-dom';

import LoginDaehee from './Pages/daeheelee/Login/Login';
import MainDaehee from './Pages/daeheelee/Main/Main';

import LoginJieun from './Pages/jieunyang/Login/Login';
import MainJieun from './Pages/jieunyang/Main/Main';

import LoginJunwoo from './Pages/junwookang/Login/Login';
import MainJunwoo from './Pages/junwookang/Main/Main';
import ProductList from './Pages/junwookang/ProductList/ProductList';

import LoginMihyun from './Pages/mihyungim/Login/Login';
import MainMihyun from './Pages/mihyungim/Main/Main';

import LoginSunghoon from './Pages/sunghoonbae/Login/Login';
import MainSunghoon from './Pages/sunghoonbae/Main/Main';


class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login-daehee" component={LoginDaehee} />
          <Route exact path="/main-daehee" component={MainDaehee} />

					<Route exact path="/login-jieun" component={LoginJieun} />
          <Route exact path="/main-jieun" component={MainJieun} />

					<Route exact path="/login-sunghoon" component={LoginSunghoon} />
          <Route exact path="/main-sunghoon" component={MainSunghoon} />

					<Route exact path="/login-junwoo" component={LoginJunwoo} />
          <Route exact path="/main-junwoo" component={MainJunwoo} />
          <Route exact path="/productList-junwoo" component={ProductList} />     
          
					<Route exact path="/login-mihyun" component={LoginMihyun} />
          <Route exact path="/main-mihyun" component={MainMihyun} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;