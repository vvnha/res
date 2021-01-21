import { Component } from 'react';

class Choice extends Component {
    render() {
        return (
            <div className="section">
                <div className="container">
                    <div className="row justify-content-center mb-5" data-aos="fade-up">
                        <div className="col-md-8  text-center">
                            <h2 className="mb-3">Why Choose Us</h2>
                            <p className="lead">Việc lựa chọn nhà hàng của khách hàng tạo nên uy tín của chúng tôi, việc được khánh hàng tin tưởng tạo nên động lực cho chúng tôi.</p>
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
                                            <p>Sự đa dạng trong nền văn hóa của nhiều quốc gia tạo nên sự phong phú cho nhà hàng, từ đó ẩm thực nhà hàng mang tính đặc trưng riêng biệt. Ẩm thực chất lượng quyết định niềm tin của khách hàng, qua quá trình kỹ càng ở khâu chọn lựa sản phẩm, sàng lọc kỹ càng  rồi mới đến phục vụ khách hàng một cách tận tâm, tạo nên sự tin tưởng từ khách hàng, một món ăn ngon và chất lượng là yếu tố quyết định!</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h3 className="mb-0">
                                        <a className="btn-block p-3" data-toggle="collapse" href="#collapseTwo" role="button" aria-expanded="false" aria-controls="collapseTwo">Fresh Food <span className="icon"></span></a>
                                    </h3>
                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                        <div className="p-3">
                                            <p>Sự đa dạng trong nền văn hóa của nhiều quốc gia tạo nên sự phong phú cho nhà hàng, từ đó ẩm thực nhà hàng mang tính đặc trưng riêng biệt. Ẩm thực chất lượng quyết định niềm tin của khách hàng, qua quá trình kỹ càng ở khâu chọn lựa sản phẩm, sàng lọc kỹ càng  rồi mới đến phục vụ khách hàng một cách tận tâm, tạo nên sự tin tưởng từ khách hàng, một món ăn ngon và chất lượng là yếu tố quyết định!</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h3 className="mb-0">
                                        <a className="btn-block p-3" data-toggle="collapse" href="#collapseThree" role="button" aria-expanded="false" aria-controls="collapseThree">Friendly Staff  <span className="icon"></span></a>
                                    </h3>
                                    <div id="collapseThree" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                        <div className="p-3">
                                            <p>Sự đa dạng trong nền văn hóa của nhiều quốc gia tạo nên sự phong phú cho nhà hàng, từ đó ẩm thực nhà hàng mang tính đặc trưng riêng biệt. Ẩm thực chất lượng quyết định niềm tin của khách hàng, qua quá trình kỹ càng ở khâu chọn lựa sản phẩm, sàng lọc kỹ càng  rồi mới đến phục vụ khách hàng một cách tận tâm, tạo nên sự tin tưởng từ khách hàng, một món ăn ngon và chất lượng là yếu tố quyết định!</p>
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