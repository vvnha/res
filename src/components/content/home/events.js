import { Component } from 'react';

class Events extends Component {
    render() {
        return (
            <div className="section bg-light">
                <div className="container">
                    <div className="row justify-content-center mb-5" data-aos="fade-up">
                        <div className="col-md-8  text-center">
                            <h2 className="mb-3">Sự kiện &amp; Tin tức</h2>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum fuga, alias distinctio voluptatum magni voluptatibus.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="media d-block d-lg-flex mb-5" data-aos="fade-up" data-aos-delay="100">
                                <figure className="mr-4 horizontal">
                                    <img src="default/img/news_1.jpg" alt="Image placeholder" className="img-fluid" />
                                </figure>
                                <div className="media-body">
                                    <h3><a href="#">Tổ chức đêm tiệc sinh nhật tại nhà hàng</a></h3>
                                    <p className="post-meta"><span><span className="fa fa-calendar"></span> Tháng 4, ngày 22, 2018</span></p>
                                    <p>Để đáp ứng nhu cầu khách hàng, nhà hàng có dịch vụ tổ chức tiệc sinh nhật tại nhà hàng mang không khí ấm cúng.</p>
                                    <p><a href="#" className="btn btn-primary btn-outline-primary btn-sm">Đọc thêm</a></p>
                                </div>
                            </div>

                            <div className="media d-block d-lg-flex mb-5" data-aos="fade-up">
                                <figure className="mr-4 horizontal">
                                    <img src="default/img/news_2.jpg" alt="Image placeholder" className="img-fluid" data-aos-delay="200" />
                                </figure>
                                <div className="media-body">
                                    <h3><a href="#">Đồ uống sang trọng</a></h3>
                                    <p className="post-meta"><span><span className="fa fa-calendar"></span> Tháng 4, ngày 22, 2018</span></p>
                                    <p>Nhà hàng cung cấp các dịch vụ đồ uống cao cấp mang chuẩn phong cách châu Âu,...</p>
                                    <p><a href="#" className="btn btn-primary btn-outline-primary btn-sm">Đọc thêm</a></p>
                                </div>
                            </div>

                            <div className="media d-block d-lg-flex mb-5" data-aos="fade-up" data-aos-delay="300">
                                <figure className="mr-4 horizontal">
                                    <img src="default/img/img_1.jpg" alt="Image placeholder" className="img-fluid" />
                                </figure>
                                <div className="media-body">
                                    <h3><a href="#">Thực đơn mới: Lẩu Thái</a></h3>
                                    <p className="post-meta"><span><span className="fa fa-calendar"></span> Tháng 4, ngày 22, 2018</span></p>
                                    <p>Nắm bắt phong cách ẩm thực Thái Lan, nhà hàng phục vụ khách hàng một món ăn mới : Lẩu Thái...</p>
                                    <p><a href="#" className="btn btn-primary btn-outline-primary btn-sm">Đọc thêm</a></p>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-6">
                            <div className="media d-block mb-5" data-aos="fade-up" data-aos-delay="400">
                                <figure>
                                    <a href="#"><img src="default/img/news_1_large.jpg" alt="Image placeholder" className="img-fluid" /></a>
                                </figure>
                                <div className="media-body">
                                    <h3><a href="#">Thức ăn tốt cho sức khỏe của con người</a></h3>
                                    <p className="post-meta"><span><span className="fa fa-calendar"></span> Tháng 4, ngày 22, 2018</span></p>
                                    <p>Việc phân chia ăn uống điều độ là yếu tố quyết định đến việc giữ gìn sức khỏe...</p>
                                    <p><a href="#" className="btn btn-primary btn-outline-primary btn-sm">Đọc thêm</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Events;