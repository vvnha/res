import { Component } from 'react';
import callApi from '../utils/apiCaller';
import * as actions from '../../../actions/index';
import { connect } from 'react-redux';

const element = (i) => {
    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3" style={{ marginBottom: '10px' }}>
        <p style={{ color: 'black', textAlign: 'center' }} onClick={this.onchoose}>{i}</p>
    </div>
}

class reserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            table: [],
            ordered: [],
            date: '',
            time: '',
            cart: [],
            tableNotChoose: [],
            numNotChoose: null,
            totalMoney: 0
        }
    }
    componentDidMount() {
        var ordered = this.state.ordered;
        for (var i = 0; i < 16; i++) {
            var table = {
                id: i,
                status: false
            }
            ordered.push(table);
            this.setState({
                ordered: ordered,
            });
        }
        if (localStorage.getItem('token') && localStorage.getItem('user') && localStorage.getItem('cartid')) {
            var user = JSON.parse(localStorage.getItem('user'));
            this.setState({
                user: user
            });
            var cartid = this.props.cartid;
            var token = localStorage.getItem('token');
            callApi(`api/orders/getDetail/${cartid}`, 'GET', null, { 'Authorization': `Bearer ${JSON.parse(token)}` }).then(res => {
                this.setState({
                    cart: res.data.data
                });
            });
        }
    }

    render() {
        var { cart, user } = this.state;
        var totalMoney = this.countSum(this.state.cart);
        return (
            <div>
                <div className="section" data-aos="fade-up">
                    <div className="container">

                        <div className="section" data-aos="fade-up">
                            <div className="container">
                                <div className="row justify-content-center mb-5">
                                    <div className="col-md-8  text-center">
                                        <h2 className="mb-3">Reservation</h2>
                                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum fuga, alias distinctio voluptatum magni voluptatibus.</p>
                                    </div>
                                </div>

                                <div className="row justify-content-center">
                                    <div className="col-md-10 p-5 form-wrap">
                                        <div className="row justify-content-center">
                                            <div className='col-md-10 p-5 form-wrap'>
                                                <div className="row">
                                                    <div className="form-group col-md-4">
                                                        <label htmlFor="date" className="label">Date</label>
                                                        <div className="form-field-icon-wrap">
                                                            <input type="date" className="form-control" id="date" name='date' onChange={this.onChange} />
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label htmlFor="time" className="label">Time</label>
                                                        <div className="form-field-icon-wrap">
                                                            <input type="time" twelvehour="true" className="form-control" id="time" name='time' onChange={this.onChange} />
                                                        </div>
                                                    </div>
                                                    <div className="form-group col-md-4">
                                                        <label htmlFor="time" className="label">Search</label>
                                                        <div className="form-field-icon-wrap">
                                                            <input type="submit" className="btn btn-primary btn-outline-primary btn-block" value="Search" onClick={this.onSearchTable} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">

                                                    {this.onFor(this.state.ordered, this.state.content)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-md-10 p-5 form-wrap">
                                <form action="#">
                                    <div className="row mb-4">
                                        <div className="form-group col-md-4">
                                            <label htmlFor="name" className="label">Name</label>
                                            <div className="form-field-icon-wrap">
                                                <span className="icon ion-android-person"></span>
                                                <input type="text" className="form-control" id="name" defaultValue={user.name} />
                                            </div>
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label htmlFor="email" className="label">Email</label>
                                            <div className="form-field-icon-wrap">
                                                <span className="icon ion-email"></span>
                                                <input type="email" className="form-control" id="email" defaultValue={user.email} />
                                            </div>
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label htmlFor="phone" className="label">Phone</label>
                                            <div className="form-field-icon-wrap">
                                                <span className="icon ion-android-call"></span>
                                                <input type="text" className="form-control" id="phone" defaultValue={user.phone} />
                                            </div>
                                        </div>

                                        <div className="form-group col-md-4">
                                            <label htmlFor="persons" className="label">Number of Persons</label>
                                            <div className="form-field-icon-wrap">
                                                <span className="icon ion-android-arrow-dropdown"></span>
                                                <select name="persons" id="persons" className="form-control">
                                                    <option value="">1 person</option>
                                                    <option value="">2 persons</option>
                                                    <option value="">3 persons</option>
                                                    <option value="">4 persons</option>
                                                    <option value="">5+ persons</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label htmlFor="date" className="label">Date</label>
                                            <div className="form-field-icon-wrap">
                                                <input type="date" className="form-control" id="date" name='date' value={this.state.date} onChange={this.onChangeReser} />
                                            </div>
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label htmlFor="time" className="label">Time</label>
                                            <div className="form-field-icon-wrap">
                                                <input type="time" className="form-control" id="time" name='time' value={this.state.time} onChange={this.onChangeReser} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-md-4">

                                            <a href="" className="btn btn-primary btn-outline-primary btn-block" onClick={this.onSubmit}>Order</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="map-wrap" id="map" data-aos="fade"></div>
            </div >
        );
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }
    onChangeReser = (e) => {
        if (true) {
            alert('moi chon ngay va chon ban o tren');
        }
    }
    onSearchTable = (e) => {
        var { date, time, ordered } = this.state;
        for (var i = 0; i < 16; i++) {
            ordered[i].status = false;
            this.setState({
                ordered: ordered,
            });
        }
        if (date !== '' && time !== '') {
            var datetime = {
                date: date,
                time: time + ":00"
            }
            callApi('api/orders/search', 'POST', datetime, null).then(res => {
                this.setState({
                    numNotChoose: res.data.data
                });
                this.onSetTableNotChoose(this.state.numNotChoose);
                alert("Da tim kiem xong ngay gio!!");
            });
        } else {
            alert('Ban chua chon ngay gio!!!');
        }

    }
    onSetTableNotChoose = (numString) => {
        var tableNotChooseString = numString.split(",");
        var { ordered } = this.state;
        var tableNotChoose = tableNotChooseString.map(function (x) {
            return parseInt(x, 10);
        });
        this.setState({
            tableNotChoose: tableNotChoose
        });

        for (var i = 0; i < 16; i++) {
            if (tableNotChoose.indexOf(i + 1) > -1) {
                ordered[i].status = true;
            }
            this.setState({
                ordered: ordered,
            });
        }
    }
    onchoose = (e, i) => {
        var newTable = e.target.innerText;
        var table = this.state.table;
        table.push(newTable);
        this.setState({
            table: table,
        })
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
    onSubmit = (e) => {
        e.preventDefault();
        var { user, table } = this.state;
        if (table.length > 0) {
            var reserveTable = "";
            for (var i = 0; i < table.length; i++) {
                if (i === 0) {
                    reserveTable = reserveTable + table[i];
                } else {
                    reserveTable = reserveTable + "," + table[i];
                }
            }

            var datetime = this.state.date + ' ' + this.state.time;
            if (localStorage.getItem('cartid') && localStorage.getItem('token')) {
                var cartid = this.props.cartid;
                var token = localStorage.getItem('token');
                var totalMoney = this.countSum(this.state.cart);
                var body = {
                    total: totalMoney,
                    perNum: reserveTable,
                    orderDate: datetime + ':00',
                    service: '0',
                }
                if (this.state.date !== '' && this.state.time !== '') {
                    console.log(body);
                    callApi(`api/orders/${cartid}`, 'PATCH', body, { 'Authorization': `Bearer ${JSON.parse(token)}` }).then(res => {
                        alert('Đã đặt thành công!!!');
                        localStorage.removeItem('cartid');
                    }).catch(err => {
                        console.log(Date().toLocaleString());
                    });
                } else {
                    alert('Moi nhap day du ngay gio den!!!')
                }

            } else {
                alert('Moi dat mon truoc!')
            }
        } else {
            alert('Moi ban chon ban');
        }

    }
    onFor = (ordered, content) => {
        var result = null;
        var style1 = {
            color: 'black',
            textAlign: 'center',
            margin: '50px'
        }
        var style2 = {
            color: 'black',
            textAlign: 'center',
            margin: '50px',
            background: "#ff0"
        }

        if (ordered.length > 0) {
            result = ordered.map((order, index) => {
                return (
                    <div key={index} className="col-xs-3 col-sm-3 col-md-3 col-lg-3" style={{ marginBottom: '10px' }}>
                        <p style={order.status === false ? style1 : style2} table={index} onClick={(e) => this.onchoose(e, index, content)}>{index + 1}</p>
                    </div>
                );
            })
        }

        return result;
    }
    onchoose = (e, i, content) => {

        var { date, time, numNotChoose, tableNotChoose } = this.state;
        var newTable = parseInt(e.target.innerText);
        var table = this.state.table;
        var { ordered } = this.state;

        if (date !== '' && time !== '' && numNotChoose !== null) {
            var dem = 0;
            if (tableNotChoose.indexOf(i + 1) < 0) {
                for (var y = 0; y < table.length; y++) {
                    if (table[y] === newTable) {
                        dem++;
                        table.splice(y, 1);
                        ordered[i].status = !ordered[i].status;
                        this.setState({
                            table: table,
                            ordered: ordered
                        })
                    }
                }
                if (dem === 0) {
                    table.push(newTable);
                    ordered[i].status = !ordered[i].status;
                    this.setState({
                        table: table,
                        ordered: ordered
                    })
                }
            } else {
                alert('Ban khog the chon vi ban nay da duoc dat');
            }
        } else {
            alert('Ban chua chon ngay gio!!!');
        }
        //console.log(this.state.table);
    }

}
const mapStateToProps = state => {
    return {
        foods: state.foods,
        token: state.tokens,
        user: state.user,
        cartid: state.cart
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToken: (token) => {
            dispatch(actions.storeToken(token));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(reserForm);