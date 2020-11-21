import { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

class Header extends Component {

    onToggleForm = (event) => {
        this.props.onToggleForm();
        event.preventDefault();
    }
    onShowList = (isDisplayForm) => {
        //li.classList.toggle("is-show", isDisplayForm === true);
    }

    render() {
        var { isDisplayForm } = this.props;
        if (isDisplayForm === true) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
        var show = isDisplayForm ? "is-show" : "";
        var bg = isDisplayForm === true ? ' white' : '';
        var cl = isDisplayForm === true ? ' black' : '';
        var bd = isDisplayForm === true ? ' 2px solid #000' : '';
        return (
            <div>

                <nav className="site-menu" style={{ display: isDisplayForm === true ? 'block' : 'none' }} >
                    <div className="site-menu-inner">
                        <ul className="list-unstyled">
                            <li className={show}><a href="index.html">Home</a></li>
                            <li className={show}><a href="about.html">About Us</a></li>
                            <li className={show}><a href="menu.html">Our Menu</a></li>
                            <li className={show}><a href="blog.html">Our Blog</a></li>
                            <li className={show}><a href="reservation.html">Reserve A Table</a></li>
                            <li className={show}><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>
                </nav>

                <header className={"site-header scrolled awake"} style={{ background: `${bg}` }}>
                    <div className="row align-items-center">
                        <div className="col-5 col-md-3">
                            <ul className="list-unstyled social">
                                <li><a href="#" style={{ color: `${cl}` }}><span className="fa fa-facebook"></span></a></li>
                                <li><a href="#" style={{ color: `${cl}` }}><span className="fa fa-twitter"></span></a></li>
                                <li><a href="#" style={{ color: `${cl}` }}><span className="fa fa-instagram"></span></a></li>
                            </ul>
                        </div>
                        <div className="col-2 col-md-6 text-center">
                            <a href="index.html" className="site-logo" style={{ border: `${bd}`, color: `${cl}` }}>D</a>
                        </div>
                        <div className="col-5 col-md-3 text-right menu-burger-wrap">
                            <a href="#" className={`site-nav-toggle js-site-nav-toggle ${isDisplayForm === true ? 'active' : ''}`} onClick={this.onToggleForm}><i></i></a>

                        </div>
                    </div>

                </header>
            </div >
        );
    }
}
const mapStateToProps = state => {
    return {
        isDisplayForm: state.isDisplayForm
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