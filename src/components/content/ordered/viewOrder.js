import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import callApi from '../utils/apiCaller';
import OrderItem from './orderedItem';
import { connect } from 'react-redux';
import * as actions from '../../../actions/index';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class ViewOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: [],
            orderAgree: [],
            orderCancel: [],
            isLoading: true
        }
    }

    componentDidMount() {
        if (localStorage.getItem('token') && cartid !== null) {
            var cartid = this.props.cartid;
            var token = localStorage.getItem('token');
            callApi('api/users/getOrderUser', 'GET', null, { 'Authorization': `Bearer ${JSON.parse(token)}` }).then(res => {
                this.forOrder(res.data.data, token);
                this.setState({
                    isLoading: false
                });
            });
        }
    }
    render() {
        // var { totalMoney, }
        var { isLoading } = this.state;
        return (
            <React.Fragment>
                {!isLoading ? (<div className="section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8" data-aos="fade-up">

                                <h2 className="mb-5 text-center">Your Ordered List</h2>
                                <ul className="nav site-tab-nav" id="pills-tab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="pills-breakfast-tab" data-toggle="pill" href="#pills-breakfast" role="tab" aria-controls="pills-breakfast" aria-selected="true">DA DAT</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="pills-lunch-tab" data-toggle="pill" href="#pills-lunch" role="tab" aria-controls="pills-lunch" aria-selected="false">DA HUY</a>
                                    </li>
                                </ul>

                                <div className="overflow-auto">

                                    <div className="tab-content" id="pills-tabContent">
                                        <div className="tab-pane fade show active" id="pills-breakfast" role="tabpanel" aria-labelledby="pills-breakfast-tab">
                                            <div className="carousel-inner">
                                                {this.forOrderItem(this.state.orderAgree.sort().reverse(), 1)}
                                            </div>
                                        </div>

                                        <div className="tab-pane fade" id="pills-lunch" role="tabpanel" aria-labelledby="pills-lunch-tab">
                                            <div className="carousel-inner">
                                                {this.forOrderItem(this.state.orderCancel.sort().reverse(), 2)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >) : (<p>Loading..</p>)}
            </React.Fragment>
        );
    }
    forOrder = (orders, token) => {
        var result = null;
        var dem = 0;
        var { orderAgree, orderCancel } = this.state;
        if (orders.length > 0) {
            result = orders.map((order, index) => {
                if (Number(order.perNum) !== 1000 && !order.service.includes('-1')) {
                    var ordered = this.state.order;
                    ordered.push(order);
                    this.setState({
                        order: ordered,
                    });
                    if (!order.service.includes('3')) {
                        orderAgree.push(order);
                        this.setState({
                            orderAgree: orderAgree
                        });
                    } else {
                        orderCancel.push(order);
                        this.setState({
                            orderCancel: orderCancel
                        });
                    }
                }
            });
        }
        return result;
    }
    forOrderItem = (orders, type) => {
        var result = null;
        if (orders.length > 0) {
            result = orders.map((order, index) => {
                var token = localStorage.getItem('token');
                var detail = null;
                return (
                    <OrderItem match={this.props.match} location={this.props.location} order={order} key={index} vitri={index} type={type} />
                );
            });
        }
        return result;
    }

}
const mapStateToProps = state => {
    return {
        foods: state.foods,
        token: state.tokens,
        cartid: state.cart
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToken: (token) => {
            dispatch(actions.storeToken(token));
        },
        onAddCartId: (cartid) => {
            dispatch(actions.storeCartId(cartid));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewOrder);