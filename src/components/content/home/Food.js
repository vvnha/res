import { Component } from 'react';
import foods from '../../../reducers/foods';

class Food extends Component {
    render() {
        //console.log("oK");
        var { food } = this.props;
        //console.log(index);
        return (
            <div className="media d-block media-bg-white mb-5" data-aos="fade-up" data-aos-delay="400">
                <figure>
                    <a href="#"><img src="default/img/img_1.jpg" alt="Image placeholder" className="img-fluid" /></a>
                </figure>
                <div className="media-body">
                    <h3><a href="#" className="nameFood">{food.foodName}</a></h3>
                    <p className="post-meta"><span><span className="fa fa-calendar"></span>{food.ingres}</span></p>
                    <div className="price order-2"><strong className="mau">{food.price}</strong></div>
                    <p className="post-meta"><a href="#" className="btn btn-primary btn-outline-primary btn-sm">Order</a></p>
                </div>
            </div>
        );
    }
}
export default Food;