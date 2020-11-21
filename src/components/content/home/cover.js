import { Component } from 'react';

class Cover extends Component {
    render() {
        return (
            <div className="cover_1">
                <div className="img_bg" style={{ backgroundImage: 'url(default/img/slider-1.jpg)' }} data-stellar-background-ratio="0.5">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-12" data-aos="fade-up">
                                <h2 className="heading">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ipsa sint amet aliquam velit minima tenetur quisquam beatae molestiae possimus dicta.</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Cover;