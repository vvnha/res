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
                                    <h3>Ẩm thực chất lượng</h3>
                                    <p>Sự đa dạng trong nền văn hóa của nhiều quốc gia tạo nên sự phong phú cho nhà hàng, từ đó ẩm thực nhà hàng mang tính đặc trưng riêng biệt.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
                            <div className="media feature-icon d-block text-center">
                                <div className="icon">
                                    <span className="flaticon-vegetables"></span>
                                </div>
                                <div className="media-body">
                                    <h3>Thực phẩm sạch</h3>
                                    <p>Từ trong khâu tuyển chọn, các thực phẩm dùng trong bữa ăn phải đảm bảo tính an toàn sản phẩm, từ đó phục vụ cho thực khách những món ăn tươi nhất, chất lượng nhất.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
                            <div className="media feature-icon d-block text-center">
                                <div className="icon">
                                    <span className="flaticon-pancake"></span>
                                </div>
                                <div className="media-body">
                                    <h3>Nhân viên thân thiện</h3>
                                    <p>Với mục tiêu là tôn trọng khách hàng, các nhân viên luôn luôn đảm bảo phục vụ thực khách nhằm đáp ứng nhu cầu ẩm thực của khách hàng.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="500">
                            <div className="media feature-icon d-block text-center">
                                <div className="icon">
                                    <span className="flaticon-tray"></span>
                                </div>
                                <div className="media-body">
                                    <h3>Dễ dàng đặt bàn</h3>
                                    <p>Để đảm bảo các quý khách luôn có được những khoản thời gian thuận tiện, nhà hàng có tính năng cho đặt bàn trong đó có chọn bàn trước, quý khách có thể tự do chọn lựa thời gian hợp lý cho mình</p>
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