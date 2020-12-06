import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import callApi from '../content/utils/apiCaller';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
        };
    }
    showLogOut = (menus) => {
        var newElement = null;
        if (this.props.token) {
            newElement = {
                name: 'Logout',
                to: '/logout',
                exact: false
            }
        }
        menus.push(newElement);
        //console.log(menus.length);
        return menus;
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
                        isLoading: false
                    })
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
        //this.menus = this.showLogOut(menus);
        //console.log(this.state.userName);
        if (isDisplayForm === true) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
        var show = isDisplayForm ? "is-show" : "";
        var classOfMenu = isDisplayForm === true ? 'scrolled awake' : 'scrolled awake';
        var userName = this.state.userName !== null && localStorage.getItem('token') ? this.state.userName : 'Login';
        //console.log(userName);
        var showButton = this.state.userName !== null && localStorage.getItem('token') ? '' : <li><a href="/registry" ><span className="fa">Sign up</span></a></li>;
        return (
            <React.Fragment>
                {isLoading === false ? (
                    <div>
                        <nav className="site-menu" style={{ display: isDisplayForm === true ? 'block' : 'none' }} >
                            <div className="site-menu-inner">
                                <ul className="list-unstyled" onClick={this.onToggleForm}>
                                    {this.showMenus(menus, show)}
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
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);