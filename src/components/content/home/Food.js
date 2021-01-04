import { Component } from 'react';
import NumberFormat from 'react-number-format';
import foods from '../../../reducers/foods';
import callApi from '../utils/apiCaller';
import * as actions from '../../../actions/index';
import { connect } from 'react-redux';
import * as Config from '../../../constants/config';

class Food extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: {},
            detail: {
                foodID: null,
                orderID: null,
                price: 0,
                qty: 1
            }
        }
    }
    componentDidMount() {
        if (localStorage.getItem('token')) {
            var token = localStorage.getItem('token');
            callApi('api/users/getOrderUser', 'GET', null, { 'Authorization': `Bearer ${JSON.parse(token)}` }).then(res => {
                this.forOrder(res.data.data, token);
            });
        }
    }
    onSubmit = (event) => {
        event.preventDefault();
        if (localStorage.getItem('token')) {
            var token = localStorage.getItem('token');
            var { cart } = this.state;
            var { food } = this.props;

            if (cart && cart.orderID) {
                var body = {
                    orderID: cart.orderID,
                    foodID: food.foodID,
                    qty: 1,
                    price: food.price
                }
                callApi(`api/orders/getDetail/${cart.orderID}`, 'GET', null, { 'Authorization': `Bearer ${JSON.parse(token)}` }).then(res => {
                    this.forDetails(res.data.data, food, token, cart);
                });
            }
        } else {
            alert('Moi dang nhap');
        }
    }
    render() {
        //console.log("oK");

        var { food } = this.props;
        //console.log(index);
        return (
            <div className="media d-block media-bg-white mb-5" data-aos="fade-up" data-aos-delay="400">
                <figure>
                    <a href="#"><img src={`${Config.API_URL}/${food.img}`} alt="Image placeholder" className="img-fluid" style={{ height: "150px", objectFit: "cover" }} /></a>
                </figure>
                <div className="media-body">
                    <h3><a href="#" className="nameFood">{food.foodName}</a></h3>
                    <p className="post-meta"><span><span className="fa fa-calendar"></span>{food.ingres}</span></p>
                    <div className="price order-2"><strong className="mau"><NumberFormat value={parseInt
                        (food.price)} displayType={'text'} thousandSeparator={true} /> VND</strong></div>
                    <p className="post-meta"><a href="" className="btn btn-primary btn-outline-primary btn-sm" onClick={this.onSubmit}>Order</a></p>
                </div>
            </div>
        );
    }
    forOrder = (orders, token) => {
        var result = null;
        if (orders.length > 0) {
            var dem = 0;
            result = orders.map((order, index) => {
                if (Number(order.perNum) === 1000 && order.service.includes('-1')) {
                    dem = dem + 1;
                    this.setState({
                        cart: order
                    });
                    this.props.onAddCartId(order.orderID);
                    return result;
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
    forDetails = (details, food, token, cart) => {
        var result = null;
        var dem = 0;
        if (details.length > 0) {
            result = details.map((detail, index) => {
                //console.log(detail);
                if (detail.foodID === food.foodID) {
                    dem++;
                    this.setState({
                        detail: {
                            foodID: food.foodID,
                            orderID: detail.orderID,
                            price: food.price,
                            qty: detail.qty
                        }
                    });
                    var body = this.state.detail;
                    body.qty += 1;
                    callApi(`api/orderDetails/${detail.detailID}`, 'PATCH', body, { 'Authorization': `Bearer ${JSON.parse(token)}` }).then(res => {
                        alert('Them gio hang thanh cong');
                    });
                }

            });
            if (dem == 0) {
                this.addFoodToCart(token, cart, food);
            }
        } else {
            this.addFoodToCart(token, cart, food);
        }
        return result;
    }
    addFoodToCart = (token, cart, food) => {
        var body = {
            orderID: cart.orderID,
            foodID: food.foodID,
            qty: 1,
            price: food.price
        }
        callApi(`api/orderDetails`, 'POST', body, { 'Authorization': `Bearer ${JSON.parse(token)}` }).then(res => {
            alert('Them gio hang thanh cong');
        });
    }
}
const mapStateToProps = state => {
    return {
        foods: state.foods,
        token: state.tokens
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
export default connect(mapStateToProps, mapDispatchToProps)(Food);