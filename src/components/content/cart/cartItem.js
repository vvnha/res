import { Component } from 'react';
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';
import * as actions from '../../../actions/index';
import callApi from '../utils/apiCaller';

class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            food: [{
                orderID: '',
                foodID: '',
                qty: '',
                price: ''
            }]
        }
    }
    onChange = (e) => {
        var { food } = this.props;
        var target = e.target;
        var name = target.name;
        this.state.food = food;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        var newFood = {
            orderID: food.orderID,
            foodID: food.foodID,
            [name]: Number(value),
            price: food.price
        }
        this.setState({
            food: newFood,
        });
        if (localStorage.getItem('token') && localStorage.getItem('cartid') && cartid !== null) {
            var cartid = this.props.cartid;
            var token = localStorage.getItem('token');

            if (newFood.qty == 0) {
                callApi(`api/orderDetails/${food.detailID}`, 'DELETE', null, { 'Authorization': `Bearer ${JSON.parse(token)}` }).then(res => {
                    alert("Da xoa thanh cong");
                });
            } else {
                callApi(`api/orderDetails/${food.detailID}`, 'PATCH', newFood, { 'Authorization': `Bearer ${JSON.parse(token)}` }).then(res => {
                    alert("Da update thanh cong");
                });
            }

        }
    }
    render() {
        var { food } = this.props;
        return (
            <div className="d-block d-md-flex menu-food-item">
                <div className="text order-1 mb-3">
                    <h3 style={{ float: "left" }} ><a href="#" >{food.foodName}</a></h3>
                    <p style={{ float: "left", width: '100%', marginTop: '10px' }}><input name="number" className='quantity form-control' style={{ width: '150px', height: '35px' }} min="1" max="1000" defaultValue={food.qty} name='qty' onChange={this.onChange}></input></p>
                </div>
                <div className="price order-2">
                    <strong><NumberFormat value={parseInt
                        (food.price)} displayType={'text'} thousandSeparator={true} /> VND</strong>
                    <a className="btn btn-primary btn-outline-primary btn-sm cancel" style={{ float: 'right', marginRight: '0px', marginTop: '10px' }}>Cancel</a>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        token: state.tokens
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToken: (token) => {
            dispatch(actions.storeToken(token));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(CartItem);