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
                            <div className="image" style={{ backgroundImage: 'url("http://restaurantqn.herokuapp.com/public/img/cua-rang-me1.jpg")' }} data-aos="fade"></div>
                            <div className="text">
                                <h3>Cua rang me</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur illo quisquam saepe quaerat.</p>
                                <p className="price">300,000 VND</p>
                            </div>
                        </div>
                        <div className="d-flex item">
                            <div className="image order-2 order-md-1" style={{ backgroundImage: 'url("https://restaurantqn.herokuapp.com/public/img/shashimicanoc1.jpg")' }} data-aos="fade" data-aos-delay="100"></div>
                            <div className="text order-1 order-md-2">
                                <h3>Shashimi Cá Nóc</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur illo quisquam saepe quaerat.</p>
                                <p className="price">200,000 VND</p>
                            </div>
                        </div>
                        <div className="d-flex item">
                            <div className="image order-1 order-md-2 order-lg-2 order-xl-1" style={{ backgroundImage: 'url("https://restaurantqn.herokuapp.com/public/img/Sashimi_set9.jpg")' }} data-aos="fade" data-aos-delay="200"></div>
                            <div className="text order-2 order-md-1 order-lg-1 order-xl-2">
                                <h3>Shashimi Cá Hồi</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur illo quisquam saepe quaerat.</p>
                                <p className="price">230,000 VND</p>

                            </div>
                        </div>
                        <div className="d-flex item">
                            <div className="image order-2" style={{ backgroundImage: 'url("https://restaurantqn.herokuapp.com/public/img/banhbachtuoc1.jpg")' }} data-aos="fade" data-aos-delay="300"></div>
                            <div className="text order-1 mb-3">
                                <h3>Bánh bạch tuộc</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur illo quisquam saepe quaerat.</p>
                                <p className="price">120,000 VND</p>
                            </div>
                        </div>
                        <div className="d-flex item">
                            <div className="image order-1 order-lg-1 order-xl-2" style={{ backgroundImage: 'url("https://restaurantqn.herokuapp.com/public/img/hinh-anh-lau-thai-chua-cay1.webp")' }} data-aos="fade" data-aos-delay="400"></div>
                            <div className="text order-2 order-lg-2 order-xl-1">
                                <h3>Lẩu Thái</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur illo quisquam saepe quaerat.</p>
                                <p className="price">1,300,000 VND</p>
                            </div>
                        </div>
                        <div className="d-flex item">
                            <div className="image order-2 order-md-1 order-lg-1 order-xl-2" style={{ backgroundImage: 'url("https://restaurantqn.herokuapp.com/public/img/pizza-chay-bang-noi-chien-khong-dau-1.jpg")' }} data-aos="fade" data-aos-delay="500"></div>
                            <div className="text order-1 order-md-2 order-lg-2 order-xl-1">
                                <h3>Pizza</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur illo quisquam saepe quaerat.</p>
                                <p className="price">180,000 VND</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Cover;