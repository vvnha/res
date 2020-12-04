import { Component } from 'react';

class Coverlogin extends Component {
    render() {
        return (
            <div className="cover_1 cover_sm">
                <div className="img_bg" style={{ backgroundImage: 'url(default/img/slider-1.jpg)' }} data-stellar-background-ratio="0.5">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-7" data-aos="fade-up">
                                <h2 className="heading">ĐĂNG NHẬP</h2>
                                <p className="lead">Hãy đăng nhập hoặc tạo tài khoản để đặt bàn và món ăn!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Coverlogin;