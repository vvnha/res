import { Component } from 'react';

class Service extends Component {
    render() {
        return (
            <div className="section services-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3" data-aos="fade-up">
                            <div className="media feature-icon d-block text-center">
                                <div className="icon">
                                    <span className="flaticon-soup"></span>
                                </div>
                                <div className="media-body">
                                    <h3>Quality Cuisine</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non pariatur suscipit repudiandae facilis incidunt unde saepe</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
                            <div className="media feature-icon d-block text-center">
                                <div className="icon">
                                    <span className="flaticon-vegetables"></span>
                                </div>
                                <div className="media-body">
                                    <h3>Fresh Food</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non pariatur suscipit repudiandae facilis incidunt unde saepe</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
                            <div className="media feature-icon d-block text-center">
                                <div className="icon">
                                    <span className="flaticon-pancake"></span>
                                </div>
                                <div className="media-body">
                                    <h3>Friendly Staff</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non pariatur suscipit repudiandae facilis incidunt unde saepe</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="500">
                            <div className="media feature-icon d-block text-center">
                                <div className="icon">
                                    <span className="flaticon-tray"></span>
                                </div>
                                <div className="media-body">
                                    <h3>Easy Reservation</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non pariatur suscipit repudiandae facilis incidunt unde saepe</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Service;