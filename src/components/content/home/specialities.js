import { Component } from 'react';

class Cover extends Component {
    render() {
        return (
            <div>
                <div className="section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-7 text-center" data-aos="fade-up">
                                <h2 className="mb-4">Our Specialties</h2>
                                <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae eum voluptatem odio expedita laborum fugit repudiandae dolorem consectetur.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section pt-0 pb-0">
                    <div className="menus d-flex bg-light">
                        <div className="d-flex item">
                            <div className="image" style={{ backgroundImage: 'url(default/img/img_1.jpg)' }} data-aos="fade"></div>
                            <div className="text">
                                <h3>Grilled Egg With Garlic</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur illo quisquam saepe quaerat.</p>
                                <p className="price">$5.00</p>
                            </div>
                        </div>
                        <div className="d-flex item">
                            <div className="image order-2 order-md-1" style={{ backgroundImage: 'url(default/img/img_2.jpg)' }} data-aos="fade" data-aos-delay="100"></div>
                            <div className="text order-1 order-md-2">
                                <h3>Organic Tomato Salad</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur illo quisquam saepe quaerat.</p>
                                <p className="price">$6.00</p>
                            </div>
                        </div>
                        <div className="d-flex item">
                            <div className="image order-1 order-md-2 order-lg-2 order-xl-1" style={{ backgroundImage: 'url(default/img/img_3.jpg)' }} data-aos="fade" data-aos-delay="200"></div>
                            <div className="text order-2 order-md-1 order-lg-1 order-xl-2">
                                <h3>Flatbread</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur illo quisquam saepe quaerat.</p>
                                <p className="price">$9.00</p>

                            </div>
                        </div>
                        <div className="d-flex item">
                            <div className="image order-2" style={{ backgroundImage: 'url(default/img/img_4.jpg)' }} data-aos="fade" data-aos-delay="300"></div>
                            <div className="text order-1 mb-3">
                                <h3>Rack Of Lamb</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur illo quisquam saepe quaerat.</p>
                                <p className="price">$13.00</p>
                            </div>
                        </div>
                        <div className="d-flex item">
                            <div className="image order-1 order-lg-1 order-xl-2" style={{ backgroundImage: 'url(default/img/img_5.jpg)' }} data-aos="fade" data-aos-delay="400"></div>
                            <div className="text order-2 order-lg-2 order-xl-1">
                                <h3>Eggplant Parmigiana</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur illo quisquam saepe quaerat.</p>
                                <p className="price">$9.00</p>
                            </div>
                        </div>
                        <div className="d-flex item">
                            <div className="image order-2 order-md-1 order-lg-1 order-xl-2" style={{ backgroundImage: 'url(default/img/img_6.jpg)' }} data-aos="fade" data-aos-delay="500"></div>
                            <div className="text order-1 order-md-2 order-lg-2 order-xl-1">
                                <h3>Spicy Meatballs</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur illo quisquam saepe quaerat.</p>
                                <p className="price">$7.00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Cover;