import { Component } from 'react';

class Cover extends Component {
    render() {
        return (
            <div className="cover_1 cover_sm">
                <div className="img_bg" style={{ backgroundImage: 'url(default/img/slider-1.jpg)' }} data-stellar-background-ratio="0.5">
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-7" data-aos="fade-up">
                                <h2 className="heading mb-4">Food that are best for your overall health</h2>
                                <div className="post-info">
                                    <div className="date-info">February 18, 2017</div>
                                    <div className="category-info"><span className="seperator">|</span>In <a href="#" data-title="View all posts in Lifestyle" title="View all posts in Lifestyle">Lifestyle</a></div>
                                    <div className="author-info"><span className="seperator">|</span>By <a href="#">Charles Clark</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Cover;