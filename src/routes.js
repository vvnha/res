import { Component } from 'react';
import Home from '../src/components/content/home/home';
import About from './components/content/about/about';
import Blog from './components/content/blog/blog';
import BlogSingle from './components/content/blog-single/blog-single';
import Contact from './components/content/contact/contact';
import Reser from './components/content/reservation/reservation';
import Menu from './components/content/menu/menu';
import Header from './components/header/header';
import NotFound from './components/NotFound';
import Login from './components/content/login/login';
import Registry from './components/content/registry/registry';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/about',
        exact: false,
        main: () => <About />
    },
    {
        path: '/menu',
        exact: false,
        main: () => <Menu />
    },
    {
        path: '/blog',
        exact: false,
        main: () => <Blog />
    },
    {
        path: '/reservation',
        exact: false,
        main: () => <Reser />
    },
    {
        path: '/contact',
        exact: false,
        main: () => <Contact />
    },
      {
        path: '/login',
        exact: false,
        main: () => <Login />
    },
        {
        path: '/registry',
        exact: false,
        main: () => <Registry />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    },

];

export default routes;