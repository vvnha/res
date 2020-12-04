import './App.css';
import { Component } from 'react';
import { BrowserRouter as Router, Route, Switch,Link } from 'react-router-dom';
import Header from './components/header/header';
import routes from './routes';
import Login from './components/content/login/login';
import Registry from './components/content/registry/registry';
import { connect } from 'react-redux';

class App extends Component {

  render() {
    return (
      <Router>
      
      <Route path="/login"  Component = {Login}/>
      <Route path="/registry" exact Component = {Registry}/>

        <div className="App">
          <div className="site-wrap">
            <Header />
            <Switch>
              {this.showContentMenus(routes)}
            </Switch>
          </div>
        </div>
        
      </Router>

    );
  }
  showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (<Route key={index} path={route.path} exact={route.exact} component={route.main} />);
      });
    }
    return result;
  }
}

const mapStateToProps = state => {
  return {
  };
}
const mapDispatchToProps = (dispatch, props) => {
  return {
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
