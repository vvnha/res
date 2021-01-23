import { Component } from 'react';
import Footer from '../../footer/footer';
import Header from '../../header/header';
import axios from 'axios';
import io from 'socket.io-client';
import callApi from '../utils/apiCaller';

var connectionOptions = {
    "force new connection": true,
    "reconnectionAttempts": "Infinity",
    "timeout": 10000,
    "transports": ["websocket"]
};
const socket = io("https://service-table.herokuapp.com/", connectionOptions);

class View extends Component {
    constructor(props) {
        super(props);
        this.state = {
            table: [],
            ordered: [],
            content: '',
            tableOrder: []
        }
    }


    componentDidMount() {
        var { match } = this.props;
        var orderID = match.params.id;
        if (localStorage.getItem('token')) {
            this.onGetPerNum(orderID);
        }

        socket.on('connect', function (data) {
            socket.emit('join', 'hello server from client');
        });
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

        // this.setState({
        //     content: "5,6,7"
        // });


        socket.on('thread', (data) => {
            this.setState({
                table: data,
            });
            var table = this.state.table;

            if (table.length > 0) {
                for (var i = 0; i < 16; i++) {
                    var checkStatus = false;
                    if (table.indexOf(i + 1) > -1) {
                        ordered[i].status = true;
                    } else {
                        ordered[i].status = false;
                    }
                    this.setState({
                        ordered: ordered,
                    });
                }

            } else {
                for (var i = 0; i < 16; i++) {
                    ordered[i].status = false;
                    this.setState({
                        ordered: ordered,
                    });
                }
            }
        });
    }
    onGetPerNum = (orderID) => {
        if (localStorage.getItem('token')) {
            var token = localStorage.getItem('token');
            callApi(`api/orders/${orderID}`, 'GET', null, { 'Authorization': `Bearer ${JSON.parse(token)}` }).then(res => {
                this.setState({
                    content: res.data.data.perNum,
                });
            });
        }

    }
    render() {
        return (
            <div>
                <Header />
                <div className="section" data-aos="fade-up">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-md-8  text-center">
                                <h2 className="mb-3">Reservation</h2>
                                <p className="lead" style={{ fontSize: '30px' }}>Ban cua ban la: {this.state.content}</p>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-md-10 p-5 form-wrap">
                                <div className="row justify-content-center">
                                    <div className='col-md-10 p-5 form-wrap'>
                                        <div className="row">
                                            {this.onFor(this.state.ordered, this.state.content)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="map-wrap" id="map" data-aos="fade"></div>
                <Footer />
            </div>
        );
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

        var newTable = parseInt(e.target.innerText);
        var table = this.state.table;
        var { ordered } = this.state;

        var tableOrder;
        if (content.includes(',')) {
            tableOrder = content.split(",");
        } else {
            tableOrder = [content];
            //[...tableOrder, content];
        }

        if (tableOrder.length > 0) {
            if (tableOrder.indexOf(newTable + "") > -1) {
                var dem = 0;
                for (var y = 0; y < table.length; y++) {
                    if (table[y] === newTable) {
                        dem++;
                        table.splice(y, 1);
                        //ordered[i].status = !ordered[i].status;
                        this.setState({
                            table: table,
                            //ordered: ordered
                        })
                    }
                }
                if (dem === 0) {
                    table.push(newTable);
                    //ordered[i].status = !ordered[i].status;
                    this.setState({
                        table: table,
                        //ordered: ordered
                    })
                }
                socket.emit('message', this.state.table);
            } else {
                alert('ban chua dat ban nay');
            }
        }
    }
}
export default View;