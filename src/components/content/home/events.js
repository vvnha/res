import { Component } from 'react';

class Events extends Component {
    render() {
        return (
            <div className="section bg-light">
                <div className="container">
                    <div className="row justify-content-center mb-5" data-aos="fade-up">
                        <div className="col-md-8  text-center">
                            <h2 className="mb-3">Events &amp; News</h2>
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
                                    <h3><a href="#">Birthday Party Held in Diner Restaurant</a></h3>
                                    <p className="post-meta"><span><span className="fa fa-calendar"></span> April 22, 2018</span></p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus</p>
                                    <p><a href="#" className="btn btn-primary btn-outline-primary btn-sm">Read More</a></p>
                                </div>
                            </div>

                            <div className="media d-block d-lg-flex mb-5" data-aos="fade-up">
                                <figure className="mr-4 horizontal">
                                    <img src="default/img/news_2.jpg" alt="Image placeholder" className="img-fluid" data-aos-delay="200" />
                                </figure>
                                <div className="media-body">
                                    <h3><a href="#">Drinks Overload</a></h3>
                                    <p className="post-meta"><span><span className="fa fa-calendar"></span> April 22, 2018</span></p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus</p>
                                    <p><a href="#" className="btn btn-primary btn-outline-primary btn-sm">Read More</a></p>
                                </div>
                            </div>

                            <div className="media d-block d-lg-flex mb-5" data-aos="fade-up" data-aos-delay="300">
                                <figure className="mr-4 horizontal">
                                    <img src="default/img/img_1.jpg" alt="Image placeholder" className="img-fluid" />
                                </figure>
                                <div className="media-body">
                                    <h3><a href="#">New Recipe: Steak Steak Steak.</a></h3>
                                    <p className="post-meta"><span><span className="fa fa-calendar"></span> April 22, 2018</span></p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus</p>
                                    <p><a href="#" className="btn btn-primary btn-outline-primary btn-sm">Read More</a></p>
                                </div>
                            </div>

                        </div>

                        <div className="col-lg-6">
                            <div className="media d-block mb-5" data-aos="fade-up" data-aos-delay="400">
                                <figure>
                                    <a href="#"><img src="default/img/news_1_large.jpg" alt="Image placeholder" className="img-fluid" /></a>
                                </figure>
                                <div className="media-body">
                                    <h3><a href="#">Food that are best for your overall health</a></h3>
                                    <p className="post-meta"><span><span className="fa fa-calendar"></span> April 22, 2018</span></p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus</p>
                                    <p><a href="#" className="btn btn-primary btn-outline-primary btn-sm">Read More</a></p>
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