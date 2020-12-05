
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import callApi from '../utils/apiCaller';
import { connect } from 'react-redux';
import * as actions from '../../../actions/index';


const info = (inf) => {
    return <h2>{inf}</h2>
}
// positionID
class Registrycontent extends Component {

    constructor(props) {
        super(props);
        let loggedIn = false
        this.state = {
            name: '',
            email: '',
            phone: '',
            positionID: 1,
            password: '',
            password_confirmation: '',
            loggedIn,
            errors: []
        }

        this.signup = this.signup.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    signup() {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(this.state.email)) {
            if (this.state.password !== this.state.password_confirmation) {
                alert('Passwords do not match. Please check your data !');
            } else {

                callApi('api/signup', 'POST', this.state).then(res => {
                    console.log(res.data);
                    var check = res.data
                    if (check.code) {
                        this.setState({
                            errors: check.error
                        });
                        this.onShowError(this.state.errors);
                    } else {
                        this.setState({
                            loggedIn: true
                        });
                    }

                });
            }
        }

    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    onShowError(error) {
        var result = null;
        if (error) {
            var text = "";
            if (error.email) {
                text = `${text}Email đã được sử dụng`;
            }
            if (error.phone) {
                text = `${text}/Số điện thoại phải là số và nhỏ nhất là 10 số`;
            }
            return <h4 style={{ color: 'red' }}>{text}</h4>;

        }
        return result;
    }



    render() {
        if (this.props.token !== "") {
            return <Redirect to="/" />
        }
        console.log(this.state.loggedIn);
        if (this.state.loggedIn === true) {
            return <Redirect to="/login" />
        }
        var { errors } = this.state;
        //console.log(this.props.token);
        return (
            <div>
                <div className="section" data-aos="fade-up">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-md-8  text-center">
                                <h2 className="mb-3">Registry Form</h2>
                                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum fuga, alias distinctio voluptatum magni voluptatibus.</p>
                            </div>
                        </div>
                        {this.onShowError(errors)}
                        <div className="row justify-content-center">
                            <div className="col-md-10 p-5 form-wrap">
                                {/* <form action="#"> */}
                                <div className="row mb-4">
                                    <div className="form-group col-md-12">
                                        {/* <label htmlFor="name" className="label"><h4>Name</h4></label> */}
                                        <p htmlFor="name" className="label" style={{ textAlign: 'left' }}>Name</p>
                                        <div className="form-field-icon-wrap">
                                            <span className="icon ion-android-person"></span>
                                            <input type="text" className="form-control" name="name" onChange={this.onChange} />
                                        </div>
                                    </div>
                                    <div className="form-group col-md-12">
                                        {/* <label htmlFor="email" className="label"><h4>Email</h4></label> */}
                                        <p htmlFor="email" className="label" style={{ textAlign: 'left' }}>Email</p>
                                        <div className="form-field-icon-wrap">
                                            <span className="icon ion-email"></span>
                                            <input type="email" className="form-control" name="email" onChange={this.onChange} />
                                        </div>
                                    </div>
                                    <div className="form-group col-md-12">
                                        {/* <label htmlFor="phone" className="label"><h4>Phone</h4></label> */}
                                        <p htmlFor="phone" className="label" style={{ textAlign: 'left' }}>Phone</p>
                                        <div className="form-field-icon-wrap">
                                            <span className="icon ion-android-call"></span>
                                            <input type="text" className="form-control" name="phone" onChange={this.onChange} />
                                        </div>
                                    </div>

                                    <div className="form-group col-md-12">
                                        {/* <label htmlFor="pass" className="label"><h4>Password</h4></label> */}
                                        <p htmlFor="pass" className="label" style={{ textAlign: 'left' }}>Password</p>
                                        <input type="password" className="form-control" name="password" onChange={this.onChange} />
                                    </div>

                                    <div className="form-group col-md-12">
                                        {/* <label htmlFor="againpass" className="label"><h4>Again Password</h4></label> */}
                                        <p htmlFor="againpass" className="label" style={{ textAlign: 'left' }}>Again Password</p>
                                        <input type="password" className="form-control" name="password_confirmation" onChange={this.onChange} />
                                        {/* //password_confirmation */}
                                    </div>
                                </div>

                                <div className="row justify-content-center">
                                    <div className="col-md-4">
                                        {/* <input type="submit" className="btn btn-primary btn-outline-primary btn-block" value="sign up" onClick={this.sigup} /> */}
                                        <input type="submit" className="btn btn-primary btn-outline-primary btn-block" value="sign up" onClick={this.signup} />
                                    </div>
                                </div>
                                {/* </form> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="map-wrap" id="map" data-aos="fade"></div> */}
            </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Registrycontent);