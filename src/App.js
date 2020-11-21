import './App.css';
import { Component } from 'react';
import Home from '../src/components/content/home/home';
import About from './components/content/about/about';
import Blog from './components/content/blog/blog';
import BlogSingle from './components/content/blog-single/blog-single';
import Contact from './components/content/contact/contact';
import Reser from './components/content/reservation/reservation';
import Menu from './components/content/menu/menu';
import { connect } from 'react-redux';
class App extends Component {
  render() {
    return (
      <Home />
    );
  }
}

const mapStateToProps = state => {
  return {
  };
}
const mapDispatchToProps = (dispatch, props) => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
