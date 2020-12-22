import { Component, Suspense, lazy } from 'react';
//import Home from '../src/components/content/home/home';
import About from './components/content/about/about';
import Blog from './components/content/blog/blog';
import BlogSingle from './components/content/blog-single/blog-single';
import Contact from './components/content/contact/contact';
import Reser from './components/content/reservation/reservation';
//import Menu from './components/content/menu/menu';
import Header from './components/header/header';
import YourCart from './components/content/cart/cart';
import NotFound from './components/NotFound';
import Login from './components/content/login/login';
import Logout from './components/content/login/logout';
import Registry from './components/content/registry/registry';
import Ordered from './components/content/ordered/ordered';
import Details from './components/content/ordered/details';
const Home = lazy(() => import('../src/components/content/home/home'));
const Menu = lazy(() => import('../src/components/content/menu/menu'));

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Suspense fallback={<div style={{ display: "block" }}>Loading...</div>}><Home /></Suspense>
    },
    {
        path: '/about',
        exact: false,
        main: () => <About />
    },
    {
        path: '/menu',
        exact: false,
        main: () => <Suspense fallback={<div>Loading...</div>}><Menu /></Suspense>
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
        path: '/cart',
        exact: false,
        main: () => <YourCart />
    },
    {
        path: '/ordered',
        exact: false,
        main: ({ match }) => <Ordered match={match} />
    },
    {
        path: '/ordered/view',
        exact: false,
        main: ({ match }) => <Details match={match} />
    },
    {
        path: '/logout',
        exact: false,
        main: () => <Logout />  //logout
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    },

];

export default routes;