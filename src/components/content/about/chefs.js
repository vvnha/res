import { Component } from 'react';

class Chefs extends Component {
    render() {
        return (
            <div className="section">
                <div className="container">
                    <div className="row justify-content-center mb-5" data-aos="fade-up">
                        <div className="col-md-8  text-center">
                            <h2 className="mb-3">Restaurants Chef</h2>
                            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum fuga, alias distinctio voluptatum magni voluptatibus.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3" data-aos="fade-up" data-aos-delay="100">
                            <img src="default/img/person_1.jpg" alt="Image placeholder" className="img-fluid mb-4 rounded" />
                            <h3 className="mb-3">James Smith</h3>
                            <p className="post-meta text-muted">Chef Cook</p>
                            <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum cumque velit labore placeat corporis ad quisquam odio inventore beatae repudiandae ea quidem saepe doloribus libero, alias, eveniet quam at aperiam.</p>
                        </div>
                        <div className="col-md-3" data-aos="fade-up" data-aos-delay="200">
                            <img src="default/img/person_2.jpg" alt="Image placeholder" className="img-fluid mb-4 rounded" />
                            <h3 className="mb-3">Rob Woodstone</h3>
                            <p className="post-meta text-muted">Chef Cook</p>
                            <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum cumque velit labore placeat corporis ad quisquam odio inventore beatae repudiandae ea quidem saepe doloribus libero, alias, eveniet quam at aperiam.</p>
                        </div>
                        <div className="col-md-3" data-aos="fade-up" data-aos-delay="300">
                            <img src="default/img/person_3.jpg" alt="Image placeholder" className="img-fluid mb-4 rounded" />
                            <h3 className="mb-3">Steph Gold</h3>
                            <p className="post-meta text-muted">Chef Cook</p>
                            <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum cumque velit labore placeat corporis ad quisquam odio inventore beatae repudiandae ea quidem saepe doloribus libero, alias, eveniet quam at aperiam.</p>
                        </div>
                        <div className="col-md-3" data-aos="fade-up" data-aos-delay="400">
                            <img src="default/img/person_4.jpg" alt="Image placeholder" className="img-fluid mb-4 rounded" />
                            <h3 className="mb-3">Jon White</h3>
                            <p className="post-meta text-muted">Chef Cook</p>
                            <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum cumque velit labore placeat corporis ad quisquam odio inventore beatae repudiandae ea quidem saepe doloribus libero, alias, eveniet quam at aperiam.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Chefs;