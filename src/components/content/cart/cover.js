import { Component } from 'react';


class Cover extends Component {
    render() {
        return (
            <div className="cover_1 cover_sm">
                <div className="img_bg" style={{ backgroundImage: 'url(default/img/slider-1.jpg)' }} data-stellar-background-ratio="0.5">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-7" data-aos="fade-up">
                                <h2 className="heading">Your Cart</h2>
                                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo saepe dolorum dolorem, iste officia voluptates! Sint repudiandae, soluta voluptatem delectus iure, eaque, harum expedita, nisi aliquam magni odio perferendis ipsum!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Cover;