import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import callApi from '../content/utils/apiCaller';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

const menus = [
    {
        name: 'Home',
        to: '/',
        exact: true
    },
    {
        name: 'About Us',
        to: '/about',
        exact: false
    },
    {
        name: 'Our Menu',
        to: '/menu',
        exact: false
    },
    {
        name: 'Our Blog',
        to: '/blog',
        exact: false
    },
    {
        name: 'Reserve A Table',
        to: '/reservation',
        exact: false
    },
    {
        name: 'Contact',
        to: '/contact',
        exact: false
    }
]
const logOut = [
    {
        name: 'Your Cart',
        to: '/cart',
        exact: false
    },
    {
        name: 'Logout',
        to: '/logout',
        exact: false
    }
]

const adminTasks = [
    {
        name: 'All user',
        to: '/user',
        exact: false
    },
    {
        name: 'Post and update food',
        to: '/changeFood',
        exact: false
    },
    {
        name: 'All contact',
        to: '/seeContact',
        exact: false
    },
    {
        name: 'Logout',
        to: '/logout',
        exact: false
    }
]

const MenuLink = ({ label, to, acitiveOnlyWhenExact, cla }) => {
    return (
        <Route path={to} exact={acitiveOnlyWhenExact} children={({ match }) => {
            var active = match ? 'active ' : '';
            return (
                <li className={active + cla} >
                    <Link to={to}>{label}</Link>
                </li>
            );
        }} />
    );
}

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: null,
            isLoading: false,
            user: [],
            menus: menus,
            position: 0,
        };
    }
    showTasks = (tasks) => {
        var newElement = null;
        var array = [...this.state.menus];
        var result = null;
        if (localStorage.getItem('token')) {
            if (tasks.length > 0) {
                result = tasks.map((task, index) => {
                    array.push(task);
                });
                this.setState({
                    menus: array
                });
            }

        }
        return array;
    }

    onToggleForm = (event) => {
        this.props.onToggleForm();
        event.preventDefault();
    }

    componentDidMount() {

        this.setState({
            isLoading: true,
        });
        if (this.props.token && localStorage.getItem('token') && this.props.token !== null && this.props.token !== '') {
            var token = localStorage.getItem('token');
            callApi('api/user', 'GET', null, { 'Authorization': `Bearer ${JSON.parse(token)}` }).then(res => {
                if (res) {
                    var data = res.data;
                    this.setState({
                        userName: data.name,
                        user: data,
                        isLoading: false,
                        position: data.positionID
                    });
                    this.props.onUser(this.state.user);
                    if (this.state.position === 1) {
                        this.showTasks(adminTasks);
                    } else {
                        this.showTasks(logOut);
                    }
                } else {
                    localStorage.removeItem('token');
                    console.log(res + "--Erro token!");
                }
            });
            this.setState({
                isLoading: false,
            });
        } else {
            this.setState({
                isLoading: false,
            });
        }
    }



    render() {
        var { isDisplayForm, token } = this.props;
        var { isLoading } = this.state;

        if (isDisplayForm === true) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
        var show = isDisplayForm ? "is-show" : "";
        var classOfMenu = isDisplayForm === true ? 'scrolled awake' : 'scrolled awake';
        var userName = this.state.userName !== null && localStorage.getItem('token') ? this.state.userName : 'Login';
        var showButton = this.state.userName !== null && localStorage.getItem('token') ? '' : <li><a href="/registry" ><span className="fa">Sign up</span></a></li>;

        return (
            <React.Fragment>
                {isLoading === false ? (
                    <div>
                        <nav className="site-menu" style={{ display: isDisplayForm === true ? 'block' : 'none' }} >
                            <div className="site-menu-inner">
                                <ul className="list-unstyled" onClick={this.onToggleForm}>
                                    {this.showMenus(this.state.menus, show)}
                                </ul>
                            </div>
                        </nav>
                        <header className={`site-header ${classOfMenu}`} >
                            <div className="row align-items-center">
                                <div className="col-5 col-md-3">
                                    <ul className="list-unstyled social">
                                        <li><a href="#" ><span className="fa fa-facebook"></span></a></li>
                                        <li><a href="#" ><span className="fa fa-twitter"></span></a></li>
                                        <li><a href="#" ><span className="fa fa-instagram"></span></a></li>
                                        <li><a href="/login" ><span className="fa">{userName}</span></a></li>
                                        {/*<li><a href="/registry" ><span className="fa">Sign up</span></a></li>*/}
                                        {showButton}
                                    </ul>
                                </div>
                                <div className="col-2 col-md-6 text-center">
                                    {/*<a href="/" className="site-logo" >D</a>*/}
                                    <Link to="/" className="site-logo">D</Link>
                                </div>
                                <div className="col-5 col-md-3 text-right menu-burger-wrap">
                                    <a href="#" className={`site-nav-toggle js-site-nav-toggle ${isDisplayForm === true ? 'active' : ''}`} onClick={this.onToggleForm}><i></i></a>
                                </div>
                            </div>
                        </header>
                    </div >) : (<p>Loading..</p>)}
            </React.Fragment>
        );
    }

    showMenus = (menus, show) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (<MenuLink key={index} label={menu.name} to={menu.to} acitiveOnlyWhenExact={menu.exact} cla={show} />);
            })
        }
        return result;
    }

}
const mapStateToProps = state => {
    return {
        isDisplayForm: state.isDisplayForm,
        token: state.tokens,
    };
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onToggleForm: () => {
            dispatch(actions.toggleForm());
        },
        onUser: (user) => {
            dispatch(actions.storeUser(user));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);