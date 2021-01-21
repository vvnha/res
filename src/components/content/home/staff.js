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
                                        <p>&ldquo;Với kinh nghiệm lâu năm trong nghề đầu bếp, sự an toàn trong quá trình chuẩn bị thực phẩm lẫn yêu cầu về thẩm mĩ, tôi luôn quan tâm đến sự đánh giá của khách hàng về món ăn, thứ tạo nên thương hiệu của chúng tôi, những người đầu bếp!&rdquo;</p>
                                        <div className="author">
                                            <img src="default/img/person_1.jpg" alt="Image placeholder" className="mb-3" style={{ width: 'auto' }} />
                                            <h4>Maxim Smith</h4>
                                            <p>CEO, Founder</p>
                                        </div>
                                    </blockquote>
                                </div>
                                <div className="item">
                                    <blockquote className="testimonial">
                                        <p>&ldquo;Với kinh nghiệm lâu năm trong nghề đầu bếp, sự an toàn trong quá trình chuẩn bị thực phẩm lẫn yêu cầu về thẩm mĩ, tôi luôn quan tâm đến sự đánh giá của khách hàng về món ăn, thứ tạo nên thương hiệu của chúng tôi, những người đầu bếp!&rdquo;</p>
                                        <div className="author">
                                            <img src="default/img/person_2.jpg" alt="Image placeholder" className="mb-3" style={{ width: 'auto' }} />
                                            <h4>Geert Green</h4>
                                            <p>CEO, Founder</p>
                                        </div>
                                    </blockquote>
                                </div>
                                <div className="item">
                                    <blockquote className="testimonial">
                                        <p>&ldquo;Với kinh nghiệm lâu năm trong nghề đầu bếp, sự an toàn trong quá trình chuẩn bị thực phẩm lẫn yêu cầu về thẩm mĩ, tôi luôn quan tâm đến sự đánh giá của khách hàng về món ăn, thứ tạo nên thương hiệu của chúng tôi, những người đầu bếp!&rdquo;</p>
                                        <div className="author">
                                            <img src="default/img/person_3.jpg" alt="Image placeholder" className="mb-3" style={{ width: 'auto' }} />
                                            <h4>Dennis Roman</h4>
                                            <p>CEO, Founder</p>
                                        </div>
                                    </blockquote>
                                </div>
                                <div className="item">
                                    <blockquote className="testimonial">
                                        <p>&ldquo;Với kinh nghiệm lâu năm trong nghề đầu bếp, sự an toàn trong quá trình chuẩn bị thực phẩm lẫn yêu cầu về thẩm mĩ, tôi luôn quan tâm đến sự đánh giá của khách hàng về món ăn, thứ tạo nên thương hiệu của chúng tôi, những người đầu bếp!&rdquo;</p>
                                        <div className="author">
                                            <img src="default/img/person_2.jpg" alt="Image placeholder" className="mb-3" style={{ width: 'auto' }} />
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