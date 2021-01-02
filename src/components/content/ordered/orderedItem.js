import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions/index';
import callApi from '../utils/apiCaller';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NumberFormat from 'react-number-format';
import { Redirect } from 'react-router-dom';
import OrderedDetail from './orderedDetails';
import View from '../view/View';

toast.configure();
class OrderItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: [],
            isLoading: true,
        }
    }
    componentDidMount() {
        var order = this.props.order;
        this.onShowDetail(order.orderID);
    }
    onDelete = (e) => {
        if (this.props.order && localStorage.getItem('token')) {
            var token = localStorage.getItem('token');
            var order = this.props.order;
            callApi(`api/orders/${order.orderID}`, 'DELETE', null, { 'Authorization': `Bearer ${JSON.parse(token)}` }).then(res => {
                alert("Da xoa thanh cong");
            });
        }
    }
    onShowDetail = (orderID) => {
        if (localStorage.getItem('token')) {
            var token = localStorage.getItem('token');
            callApi(`api/orders/getDetail/${orderID}`, 'GET', null, { 'Authorization': `Bearer ${JSON.parse(token)}` }).then(res => {
                this.setState({
                    detail: res.data.data,
                    isLoading: false
                });
            });
        }

    }
    onShowItem = (details, orderDate, total) => {
        var result = null;
        var info = '';
        if (details.length > 0) {
            result = details.map((detail, index) => {
                info = info + detail.foodName + ": " + detail.price + " VND" + " qty: " + detail.qty
            });
        }
        result = <div style={{ color: "black", textAlign: 'center' }}>
            <p>{orderDate}</p>
            <p style={{ whiteSpace: 'pre-wrap' }}>{info}</p>
            <p>Total: {total} VND</p>
        </div>
        return result;
    }
    onShowToast = (e) => {
        var { order } = this.props;
        e.preventDefault();
        var detail = this.state.detail;
        var the = this.onShowItem(detail, order.orderDate, order.total);
        toast(the, { position: toast.POSITION.TOP_CENTER, autoClose: false, style: { width: 'auto' } });
        //toast.error(<Msg />);
    }
    onShow = (details) => {
        var result = null;
        var info = '';
        if (details !== null && details.length > 0) {
            result = details.map((detail, index) => {
                return (
                    <div className="row g-0" key={index} style={{ color: 'black', fontSize: '20px' }}>

                        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                            {index + 1}
                        </div>

                        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                            {detail.foodName}
                        </div>

                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                            so luong: {detail.qty}
                        </div>

                        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                            gia :
                            <NumberFormat value={parseInt
                                (detail.price)} displayType={'text'} thousandSeparator={true} /> VND
                        </div>


                    </div>
                );
            });
        }
        return result;
    }

    render() {
        var { order, match, vitri } = this.props;
        var { isLoading } = this.state;
        var detail = this.state.detail;
        var the = this.onShowItem(detail, order.orderDate, order.total);
        var slug = 'view';
        var url = match.url;
        return (

            <React.Fragment>
                {!isLoading ? (<div>

                    <div id="accordion">
                        <div className="card">
                            <div className="card-header" id={`heading${vitri}`}>
                                <h5 className="mb-0">
                                    <button className="btn btn-link" data-toggle="collapse" data-target={`#collapse${vitri}`} aria-expanded="false" aria-controls={`#collapse${vitri}`} style={{ width: '100%' }} >

                                        <div className="row">
                                            <div className="text col-md-6 order-1 mb-3" style={{ paddingLeft: 0 }}>
                                                <h3 style={{ float: "left" }} >
                                                    <Link to={`${url}/${slug}/${order.orderID}`}>{order.orderDate}</Link>
                                                </h3>
                                                {/* <p style={{ float: "left", width: '100%', marginTop: '10px' }}><input name="number" className='quantity form-control' style={{ width: '150px', height: '35px' }} min="1" max="1000" defaultValue={food.qty} name='qty' onChange={this.onChange}></input></p> */}
                                            </div>
                                            <div className="price col-md-6 order-2">
                                                <strong style={{ fontSize: '20px' }}><NumberFormat value={parseInt
                                                    (order.total)} displayType={'text'} thousandSeparator={true} /> VND</strong>
                                                <a className="btn btn-primary btn-outline-primary btn-sm cancel" style={{ float: 'right', marginRight: '0px', marginTop: '10px', marginBottom: '10px' }} onClick={this.onDelete}>Cancel</a>
                                            </div>
                                        </div>
                                    </button>
                                </h5>
                            </div>

                            <div id={`collapse${vitri}`} className="collapse" aria-labelledby={`heading${vitri}`} data-parent="#accordion">
                                <div className="card-body">
                                    {this.onShow(this.state.detail)}
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>) : (<p>Loading..</p>)
                }
            </React.Fragment>
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
export default connect(mapStateToProps, mapDispatchToProps)(OrderItem);