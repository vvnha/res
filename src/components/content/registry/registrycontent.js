
import { Component } from 'react';
import axios from 'axios';
// positionID
class Registrycontent extends Component {

    constructor(props){
        super(props);
        this.state ={
            name: '',
            email: '',
            phone: '',
            positionID: 1,
            password:'',
            password_confirmation:'',
        }
        this.signup = this.signup.bind(this);
        this.onChange = this.onChange.bind(this);
        }
    
        signup(){
            axios({
                method: 'POST',
                url: 'https://restaurantqn.herokuapp.com/api/signup',
                data:  this.state,
            }).then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            });
       
        }
        onChange(e){
        this.setState({[e.target.name]: e.target.value});
        // console.log(this.state);
    }



    render() {
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
                        <div className="row justify-content-center">
                            <div className="col-md-10 p-5 form-wrap">
                                {/* <form action="#"> */}
                                    <div className="row mb-4">
                                        <div className="form-group col-md-12">
                                            {/* <label htmlFor="name" className="label"><h4>Name</h4></label> */}
                                            <p htmlFor="name" className="label" Style="text-align:left">Name</p>
                                            <div className="form-field-icon-wrap">
                                                <span className="icon ion-android-person"></span>
                                                <input type="text" className="form-control" name="name" onChange={this.onChange}/>
                                            </div>
                                        </div>
                                        <div className="form-group col-md-12">
                                            {/* <label htmlFor="email" className="label"><h4>Email</h4></label> */}
                                            <p htmlFor="email" className="label" Style="text-align:left">Email</p>
                                            <div className="form-field-icon-wrap">
                                                <span className="icon ion-email"></span>
                                                <input type="email" className="form-control" name="email" onChange={this.onChange}/>
                                            </div>
                                        </div>
                                        <div className="form-group col-md-12">
                                            {/* <label htmlFor="phone" className="label"><h4>Phone</h4></label> */}
                                            <p htmlFor="phone" className="label" Style="text-align:left">Phone</p>
                                            <div className="form-field-icon-wrap">
                                                <span className="icon ion-android-call"></span>
                                                <input type="text" className="form-control" name="phone" onChange={this.onChange}/>
                                            </div>
                                        </div>

                                        <div className="form-group col-md-12">
                                            {/* <label htmlFor="pass" className="label"><h4>Password</h4></label> */}
                                            <p htmlFor="pass" className="label" Style="text-align:left">Password</p>
                                            <input type="password" className="form-control" name="password" onChange={this.onChange}/>
                                        </div>

                                        <div className="form-group col-md-12">
                                            {/* <label htmlFor="againpass" className="label"><h4>Again Password</h4></label> */}
                                            <p htmlFor="againpass" className="label" Style="text-align:left">Again Password</p>
                                            <input type="password" className="form-control"  name="password_confirmation" onChange={this.onChange}/> 
                                            {/* //password_confirmation */}
                                        </div>
                                    </div>

                                    <div className="row justify-content-center">
                                        <div className="col-md-4">
                                            {/* <input type="submit" className="btn btn-primary btn-outline-primary btn-block" value="sign up" onClick={this.sigup} /> */}
                                            <input type="submit" className="btn btn-primary btn-outline-primary btn-block" value="sign up" onClick={this.signup}/>
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
export default Registrycontent;