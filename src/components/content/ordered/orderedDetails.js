import { Component } from 'react';
import CartItem from '../cart/cartItem';
import callApi from '../utils/apiCaller';
import { connect } from 'react-redux';
import * as actions from '../../../actions/index';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class OrderedDetail extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         cartItem: [],
    //         cart: [],
    //         totalMoney: 0
    //     }
    // }
    componentDidMount() {
        // console.log(this.props.match);
        // if (localStorage.getItem('token') && this.props.order) {
        //     console.log(this.props.order);
        //     var cartid = this.props.order.orderID;
        //     var token = localStorage.getItem('token');

        //     if (this.props.cartid && localStorage.getItem('token')) {
        //         var cartid = this.props.cartid;
        //         callApi(`api/orders/getDetail/${cartid}`, 'GET', null, { 'Authorization': `Bearer ${JSON.parse(token)}` }).then(res => {
        //             this.setState({
        //                 cart: res.data.data
        //             });
        //         });
        //     }
        // }
    }
    render() {
        //var { cart } = this.state;
        console.log(this.props.match);
        //var totalMoney = this.countSum(this.state.cart);
        return (
            <div className="section">{this.props.match}</div>

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
export default connect(mapStateToProps, mapDispatchToProps)(OrderedDetail);