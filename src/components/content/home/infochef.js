import { Component } from 'react';

class InfoChef extends Component {
    render() {
        return (
            <div className="site-half-wrap d-block d-lg-flex">
                <div className="block-half" data-aos="fade">
                    <div className="image-bg-fullwidth" style={{ backgroundImage: 'url(default/img/img_1.jpg)' }}></div>
                    <div className="half d-block d-lg-flex">
                        <div className="text">
                            <h2 className="mb-4">Thực đơn của chúng tôi</h2>
                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet eos quasi, necessitatibus dicta. Temporibus odit sed quisquam commodi, in aut, repellendus porro saepe minus, enim obcaecati fugiat optio eaque odio?</p>
                            <p><a href="#" className="btn btn-primary btn-outline-primary">View All Menu</a></p>
                        </div>
                        <div className="image" style={{ backgroundImage: 'url(default/img/img_2.jpg)' }}></div>
                    </div>
                </div>
                <div className="block-half" data-aos="fade">
                    <div className="half d-block d-lg-flex">
                        <div className="text">
                            <h2 className="mb-4">Đầu bếp chuyên nghiệp</h2>
                            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet eos quasi, necessitatibus dicta. Temporibus odit sed quisquam commodi, in aut, repellendus porro saepe minus, enim obcaecati fugiat optio eaque odio?</p><p><a href="#" className="btn btn-primary btn-outline-primary">Meet Our chef</a></p>
                        </div>
                        <div className="image" style={{ backgroundImage: 'url(default/img/chef_1.jpg)' }}></div>
                    </div>
                    <div className="image-bg-fullwidth" style={{ backgroundImage: 'url(default/img/chef_2.jpg)' }}></div>
                </div>
            </div>
        );
    }
}
export default InfoChef;