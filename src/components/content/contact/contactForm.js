import { Component } from 'react';

class ContactForm extends Component {
    render() {
        return (
            <div>
                <div className="section" data-aos="fade-up">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-md-8  text-center">
                                <h2 className="mb-3">Contact Form</h2>
                                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum fuga, alias distinctio voluptatum magni voluptatibus.</p>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-10 p-5 form-wrap">
                                <form action="#">
                                    <div className="row mb-4">
                                        <div className="form-group col-md-4">
                                            <label htmlFor="name" className="label">Name</label>
                                            <div className="form-field-icon-wrap">
                                                <span className="icon ion-android-person"></span>
                                                <input type="text" className="form-control" id="name" />
                                            </div>
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label htmlFor="email" className="label">Email</label>
                                            <div className="form-field-icon-wrap">
                                                <span className="icon ion-email"></span>
                                                <input type="email" className="form-control" id="email" />
                                            </div>
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label htmlFor="phone" className="label">Phone</label>
                                            <div className="form-field-icon-wrap">
                                                <span className="icon ion-android-call"></span>
                                                <input type="text" className="form-control" id="phone" />
                                            </div>
                                        </div>

                                        <div className="form-group col-md-12">
                                            <label htmlFor="message" className="label">Message</label>
                                            <textarea name="message" id="message" cols="30" rows="10" className="form-control"></textarea>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-md-4">
                                            <input type="submit" className="btn btn-primary btn-outline-primary btn-block" value="Submit" />
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
export default ContactForm;