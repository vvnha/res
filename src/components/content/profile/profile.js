import { Component } from 'react';
import Footer from '../../footer/footer';
import Header from '../../header/header';
import Infor from './infor';
import './cssfile.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Profile extends Component {
    render() {
        return (

            <div>
                <Header />
                <div className="container" style={{ marginTop: 100 + 'px' }}>
                    <div className="container">
                        <div className="row profile">
                            <div className="col-md-3">
                                <div className="profile-sidebar">
                                    <div className="profile-userpic">
                                        <img src="https://hocwebgiare.com/thiet_ke_web_chuan_demo/bootstrap_user_profile/images/profile_user.jpg" className="img-responsive" />
                                    </div>
                                    <div className="profile-usertitle">
                                        <div className="profile-usertitle-name">Khách hàng</div>
                                        <div className="profile-usertitle-job">TEST</div>
                                    </div>
                                    <div className="profile-userbuttons">
                                        <button type="button" className="btn btn-success btn-sm">Trang chủ</button>
                                        <Link to="/user" type="button" className="btn btn-warning btn-sm">Chinh sua</Link>
                                    </div>
                                    <div className="profile-usermenu">
                                        <ul className="nav">
                                            <li className="active"><a href=""><i className="fa fa-info-circle"></i>Cập nhật thông tin cá nhân </a>
                                            </li>
                                            <li>
                                                <a href=""> <i className="glyphicon glyphicon-shopping-cart"></i> Quản lý đơn hàng </a>
                                            </li>
                                            <li>
                                                <a href=""> <i className="fa fa-question-circle-o"></i>Phản hồi</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-9">
                                <div className="profile-content">
                                    <Infor />

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}
export default Profile;


{/* <div classNameName="section" data-aos="fade-up">
    <div classNameName="container">
        <div classNameName="row justify-content-center mb-5">
            <div classNameName="col-md-2  text-center">
            <ul className="list-group">
                <li classNameName="list-group-item">Đặt hàng</li>
                <li classNameName="list-group-item">Thông tin cá nhân</li>
                <li classNameName="list-group-item">Đánh giá</li>
                <li classNameName="list-group-item">Phản hồi</li>
                <li classNameName="list-group-item">Tài khoản</li>
                </ul>
            </div>
            <div classNameName="col-md-10  text-center">
                <Infor />
            </div>
        </div>
    </div>
</div > */}
{/* <div classNameName="map-wrap" id="map" data-aos="fade"></div> */ }