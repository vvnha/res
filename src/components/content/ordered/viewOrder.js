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
            isLoading: true
        }
    }

    componentDidMount() {
        console.log(this.props.match);
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
                                <div className="overflow-auto">

                                    <div className="tab-content" id="pills-tabContent">

                                        {this.forOrderItem(this.state.order.sort().reverse())}
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
        if (orders.length > 0) {
            result = orders.map((order, index) => {
                if (Number(order.perNum) !== 1000 && !order.service.includes('-1')) {
                    var ordered = this.state.order;
                    ordered.push(order);
                    this.setState({
                        order: ordered,
                    });
                }
            });
        }
        return result;
    }
    forOrderItem = (orders) => {
        var result = null;
        if (orders.length > 0) {
            result = orders.map((order, index) => {
                var token = localStorage.getItem('token');
                var detail = null;
                return (
                    <OrderItem match={this.props.match} order={order} key={index} vitri={index} />
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