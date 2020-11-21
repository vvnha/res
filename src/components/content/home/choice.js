import { Component } from 'react';

class Choice extends Component {
    render() {
        return (
            <div className="section">
                <div className="container">
                    <div className="row justify-content-center mb-5" data-aos="fade-up">
                        <div className="col-md-8  text-center">
                            <h2 className="mb-3">Why Choose Us</h2>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum fuga, alias distinctio voluptatum magni voluptatibus.</p>
                        </div>
                    </div>
                    <div className="row large-gutters">
                        <div className="col-md-6" data-aos="fade-up" data-aos-delay="200">
                            <img src="default/img/img_2.jpg" alt="Image placeholder" className="img-fluid rounded" />
                        </div>
                        <div className="col-md-6" data-aos="fade-up" data-aos-delay="300">
                            <div className="accordion" id="accordion">
                                <div className="accordion-item">
                                    <h3 className="mb-0">
                                        <a className="btn-block p-3" data-toggle="collapse" href="#collapseOne" role="button" aria-expanded="true" aria-controls="collapseOne">Quality Cuisine <span className="icon"></span></a>
                                    </h3>
                                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                        <div className="p-3">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur quae cumque perspiciatis aperiam accusantium facilis provident aspernatur nisi optio debitis dolorum, est eum eligendi vero aut ad necessitatibus nulla sit labore doloremque magnam! Ex molestiae, dolor tempora, ad fuga minima enim mollitia consequuntur, necessitatibus praesentium eligendi officia recusandae culpa tempore eaque quasi ullam magnam modi quidem in amet. Quod debitis error placeat, tempore quasi aliquid eaque vel facilis culpa voluptate.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h3 className="mb-0">
                                        <a className="btn-block p-3" data-toggle="collapse" href="#collapseTwo" role="button" aria-expanded="false" aria-controls="collapseTwo">Fresh Food <span className="icon"></span></a>
                                    </h3>
                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                        <div className="p-3">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel ad laborum expedita. Nostrum iure atque enim quisquam minima distinctio omnis, consequatur aliquam suscipit, quidem, esse aspernatur! Libero, excepturi animi repellendus porro impedit nihil in doloremque a quaerat enim voluptatum, perspiciatis, quas dignissimos maxime ut cum reiciendis eius dolorum voluptatem aliquam!</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h3 className="mb-0">
                                        <a className="btn-block p-3" data-toggle="collapse" href="#collapseThree" role="button" aria-expanded="false" aria-controls="collapseThree">Friendly Staff  <span className="icon"></span></a>
                                    </h3>
                                    <div id="collapseThree" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                        <div className="p-3">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel ad laborum expedita. Nostrum iure atque enim quisquam minima distinctio omnis, consequatur aliquam suscipit, quidem, esse aspernatur! Libero, excepturi animi repellendus porro impedit nihil in doloremque a quaerat enim voluptatum, perspiciatis, quas dignissimos maxime ut cum reiciendis eius dolorum voluptatem aliquam!</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Choice;