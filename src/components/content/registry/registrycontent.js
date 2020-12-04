
import { Component } from 'react';

class Registrycontent extends Component {
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
                                <form action="#">
                                    <div className="row mb-4">
                                        <div className="form-group col-md-12">
                                            <label htmlFor="name" className="label"><h4>Name</h4></label>
                                            <div className="form-field-icon-wrap">
                                                <span className="icon ion-android-person"></span>
                                                <input type="text" className="form-control" id="name" />
                                            </div>
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label htmlFor="email" className="label"><h4>Email</h4></label>
                                            <div className="form-field-icon-wrap">
                                                <span className="icon ion-email"></span>
                                                <input type="email" className="form-control" id="email" />
                                            </div>
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label htmlFor="phone" className="label"><h4>Phone</h4></label>
                                            <div className="form-field-icon-wrap">
                                                <span className="icon ion-android-call"></span>
                                                <input type="text" className="form-control" id="phone" />
                                            </div>
                                        </div>

                                        <div className="form-group col-md-12">
                                            <label htmlFor="pass" className="label"><h4>Password</h4></label>
                                            <input type="password" className="form-control" id="password" />
                                        </div>

                                        <div className="form-group col-md-12">
                                            <label htmlFor="againpass" className="label"><h4>Again Password</h4></label>
                                            <input type="password" className="form-control" id="againpass" />
                                        </div>
                                    </div>

                                    <div className="row justify-content-center">
                                        <div className="col-md-4">
                                            <input type="submit" className="btn btn-primary btn-outline-primary btn-block" value="sign up" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="map-wrap" id="map" data-aos="fade"></div>
            </div>
        );
    }
}
export default Registrycontent;