import React, { Component } from 'react';
class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="site-footer">
                    <div className="container">
                        <div className="row small-gutters mb-5">
                            <div className="col-md-6 col-lg-3 mb-5" data-aos="fade" data-aos-delay="100">
                                <div className="footer-widget">
                                    <h3>Diner Restaurant</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel neque, odio illum. Est minima sint minus sunt ducimus.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 mb-5" data-aos="fade" data-aos-delay="200">
                                <div className="footer-widget">
                                    <h3>Lunch Service</h3>
                                    <p>Booking from 12:00pm - 1:30pm</p>
                                    <h3>Dinner Service</h3>
                                    <p>Everyday: Booking from 6:00pm - 9:00pm</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 mb-5" data-aos="fade" data-aos-delay="300">
                                <div className="footer-widget">
                                    <h3>Quick Links</h3>
                                    <ul>
                                        <li><a href="#">Help &amp; Support</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Get in Touch</a></li>
                                        <li><a href="#">Testimonials</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 mb-5" data-aos="fade" data-aos-delay="400">
                                <div className="footer-widget footer-contact-widget">

                                    <h3>Subscribe</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                    <form action="" className="form-subscribe mb-5">
                                        <div className="form-group form-field">
                                            <input type="submit" value="Send" className="btn btn-primary" />
                                            <input type="text" className="form-control" placeholder="Email" />
                                        </div>
                                    </form>

                                    <h3>Contact Us</h3>
                                    <p className="contact-email">TVQUY / VVNHA</p>
                                    <p className="contact-phone">123 456 789/ 123456</p>


                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>
        );
    }
}
export default Footer;