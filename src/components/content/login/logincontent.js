
import { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import callApi from '../utils/apiCaller';
import { connect } from 'react-redux';
import * as actions from '../../../actions/index';

class Logincontent extends Component {
    constructor(props) {
        super(props);
        let loggedIn = false
        this.state = {
            email: '',
            password: '',
            loggedIn
        }
        this.login = this.login.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    login() {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(this.state.email)) {
            if (this.state.password !== "") {
                callApi('api/login', 'POST', this.state).then(res => {
                    if (res) {
                        this.props.onAddToken(res.data.access_token);
                        if (this.props.token) {
                            this.setState({
                                loggedIn: true
                            });
                            //console.log(this.props.token);
                        } else {
                            alert("Sai email hoặc mật khẩu! ");
                        }
                    } else {
                        alert("Server het han ");
                    }
                });
            } else {
                alert("Nhập password!");
            }
        }
        else {
            alert("Nhập địa chỉ email");
        }
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        // console.log(this.state);
    }

    render() {
        if (this.state.loggedIn) {
            return <Redirect to="/" />
        }
        return (

            <div>
                <div className="section" data-aos="fade-up">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-md-8  text-center">
                                <h2 className="mb-3">Login Form</h2>
                                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum fuga, alias distinctio voluptatum magni voluptatibus.</p>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-10 p-5 form-wrap">
                                {/* <form action=""> */}
                                <div className="row mb-4">
                                    <div className="form-group col-md-12">
                                        {/* <label htmlFor="email" className="label" Style="text-align:left">Email 1</label> */}
                                        <p htmlFor="email" className="label" style={{ textAlign: 'left' }}>Email</p>
                                        <div className="form-field-icon-wrap">
                                            <span className="icon ion-email"></span>
                                            <input type="text" className="form-control" id="email" name="email" onChange={this.onChange} />
                                        </div>
                                    </div>
                                    <div className="form-group col-md-12">
                                        {/* <label htmlFor="Password" className="label">Password</label> */}
                                        <p htmlFor="Password" className="label" style={{ textAlign: 'left' }}>Password</p>
                                        <div className="form-field-icon-wrap">
                                            {/*<span className="icon ion-android-call"></span>*/}
                                            <input type="password" className="form-control" name="password" onChange={this.onChange} />
                                        </div>
                                    </div>
                                </div>

                                <div className="row justify-content-center">
                                    <div className="col-md-4">
                                        <input type="submit" className="btn btn-primary btn-outline-primary btn-block" value="LOGIN" onClick={this.login} />
                                        {/* <button  onClick={()=>{this.login()}}>LOGIN</button> */}
                                    </div>
                                </div>
                                {/* </form> */}
                            </div>
                        </div>
                    </div>
                </div >
                {/* <div className="map-wrap" id="map" data-aos="fade"></div> */}
            </div >
        );
    }
}

const mapStateToProps = state => {
    return {
        foods: state.foods,
        token: state.tokens
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToken: (token) => {
            dispatch(actions.storeToken(token));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Logincontent);