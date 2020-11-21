import { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class Staff extends Component {
    render() {
        return (
            <div className="section" data-aos="fade">
                <div className="container">
                    <div className="row justify-content-center text-center" data-aos="fade-up">
                        <div className="col-md-8">
                            <OwlCarousel items={1} className="owl-carousel home-slider-loop-false" loop nav margin={8} >
                                <div className="item">
                                    <blockquote className="testimonial">
                                        <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita quaerat recusandae molestias incidunt sapiente sit numquam delectus mollitia! Non laudantium impedit voluptas consequatur corrupti. Cumque consequuntur nemo eos et error!&rdquo;</p>
                                        <div className="author">
                                            <img src="default/img/person_1.jpg" alt="Image placeholder" className="mb-3" />
                                            <h4>Maxim Smith</h4>
                                            <p>CEO, Founder</p>
                                        </div>
                                    </blockquote>
                                </div>
                                <div className="item">
                                    <blockquote className="testimonial">
                                        <p>&ldquo;Sint adipisci laborum dolorum ipsa quidem alias ipsum aperiam aut! Quis rerum soluta dolorem iure nihil velit error sequi? Dignissimos accusantium adipisci unde officia? Dolores aut sequi dolorum repellendus quod.&rdquo;</p>
                                        <div className="author">
                                            <img src="default/img/person_2.jpg" alt="Image placeholder" className="mb-3" />
                                            <h4>Geert Green</h4>
                                            <p>CEO, Founder</p>
                                        </div>
                                    </blockquote>
                                </div>
                                <div className="item">
                                    <blockquote className="testimonial">
                                        <p>&ldquo;Ratione alias iure ab facere quia aliquam dolor et voluptates esse nihil corporis distinctio hic ea quo ducimus autem cum amet. Quos accusamus iusto porro nulla temporibus numquam commodi soluta.&rdquo;</p>
                                        <div className="author">
                                            <img src="default/img/person_3.jpg" alt="Image placeholder" className="mb-3" />
                                            <h4>Dennis Roman</h4>
                                            <p>CEO, Founder</p>
                                        </div>
                                    </blockquote>
                                </div>
                                <div className="item">
                                    <blockquote className="testimonial">
                                        <p>&ldquo;Ad quod aspernatur ipsa. Numquam expedita delectus qui ad explicabo voluptas eos vel reiciendis magnam rerum quaerat quisquam accusantium quae saepe ipsam ullam ut ea molestiae porro. Recusandae veniam maxime.&rdquo;</p>
                                        <div className="author">
                                            <img src="default/img/person_2.jpg" alt="Image placeholder" className="mb-3" />
                                            <h4>Geert Green</h4>
                                            <p>CEO, Founder</p>
                                        </div>
                                    </blockquote>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Staff;