import { Component } from 'react';
import CartItem from './cartItem';
import callApi from '../utils/apiCaller';
import NumberFormat from 'react-number-format';
import { connect } from 'react-redux';
import * as actions from '../../../actions/index';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class YourCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartItem: [],
            cart: [],
            totalMoney: 0
        }
    }
    componentDidMount() {

        if (localStorage.getItem('token') && cartid !== null) {
            var cartid = this.props.cartid;
            var token = localStorage.getItem('token');
            callApi('api/users/getOrderUser', 'GET', null, { 'Authorization': `Bearer ${JSON.parse(token)}` }).then(res => {
                this.forOrder(res.data.data, token);
            });
            if (this.state.cart !== null && localStorage.getItem('cartid')) {
                callApi(`api/orders/getDetail/${cartid}`, 'GET', null, { 'Authorization': `Bearer ${JSON.parse(token)}` }).then(res => {
                    this.setState({
                        cart: res.data.data
                    });
                });
            }
        }
    }
    render() {
        var { cart } = this.state;
        var totalMoney = 0;
        if (cart.length > 0) {
            totalMoney = this.countSum(this.state.cart);
        }

        return (
            <div className="section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8" data-aos="fade-up">

                            <h2 className="mb-5 text-center">Your Cart</h2>


                            <div className="tab-content" id="pills-tabContent">

                                {this.forDetail(cart)}
                                <div className="d-block d-md-flex menu-food-item">
                                    <div className="text order-1 mb-3">
                                        <h3 style={{ float: "left" }} ><a href="#" >Total:</a></h3>
                                    </div>
                                    <div className="price order-2">
                                        <strong><NumberFormat value={parseInt
                                            (totalMoney)} displayType={'text'} thousandSeparator={true} /> VND</strong>
                                    </div>
                                </div>
                                <div className="d-block d-md-flex menu-food-item">
                                    <div className="text order-1 mb-3">
                                        <a className="btn btn-primary btn-outline-primary btn-sm cancel" style={{ float: 'left', marginRight: '0px', marginTop: '10px' }}>Update</a>
                                    </div>
                                    <div className="price order-2">
                                        {this.state.cart.length > 0 ? <Link to='/reservation' className="btn btn-primary btn-outline-primary btn-sm cancel" style={{ float: 'right', marginRight: '0px', marginTop: '10px' }}>Reservation</Link> : 'Moi dat mon tai menu'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
    countSum = (details) => {
        var result = null;
        var total = 0;
        if (details.length > 0) {
            result = details.map((detail, index) => {
                total = total + detail.qty * Number(detail.price);
            });
            result = total;
        }
        return result;
    }
    forDetail = (details) => {
        var result = null;
        var total = this.state.totalMoney;
        if (details.length > 0) {
            result = details.map((detail, index) => {
                total = total + detail.qty * detail.price;
                return (
                    <CartItem food={detail} key={index} />
                );
            });
        }
        // this.setState({
        //     totalMoney: total
        // });
        return result;
    }
    forOrder = (orders, token) => {
        console.log(orders);
        var result = null;
        var dem = 0;
        if (orders.length > 0) {
            result = orders.map((order, index) => {
                if (Number(order.perNum) === 1000 && order.service.includes('-1')) {
                    dem = dem + 1;
                    this.props.onAddCartId(order.orderID);
                }
            });
            if (dem === 0) {
                var today = new Date();
                var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + " " + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
                var body = {
                    total: 0,
                    orderDate: date,
                    perNum: '1000',
                    service: '-1',
                    dateClick: date
                }
                callApi('api/orders', 'POST', body, { 'Authorization': `Bearer ${JSON.parse(token)}` }).then(res => {
                    console.log(res);
                }).catch(err => {
                    console.log(Date().toLocaleString());
                });
            }
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
export default connect(mapStateToProps, mapDispatchToProps)(YourCart);