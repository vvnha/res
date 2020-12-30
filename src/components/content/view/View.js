import { Component } from 'react';
import Footer from '../../footer/footer';
import Header from '../../header/header';
import Cover from '../view/cover';

class View extends Component {
    constructor(props) {
        super(props);
        this.state = {
            table: []
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
                                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum fuga, alias distinctio voluptatum magni voluptatibus.</p>
                            </div>
                        </div>

                        {/* <div className="row justify-content-center">
                            <div className='col-md-10 p-5 form-wrap'>
                                <div className="row">
                                    {this.onFor(16)}
                                </div>
                            </div>
                        </div> */}

                        <div className="row justify-content-center">
                            <div className="col-md-10 p-5 form-wrap">
                                <div className="row justify-content-center">
                                    <div className='col-md-10 p-5 form-wrap'>
                                        <div className="row">
                                            {this.onFor(16)}
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
    onFor = (n) => {
        const items = [];
        for (var i = 1; i <= n; i++) {
            items.push(<div key={i} className="col-xs-3 col-sm-3 col-md-3 col-lg-3" style={{ marginBottom: '10px' }}>
                <p style={{ color: 'black', textAlign: 'center', margin: '50px' }} table={i} onClick={(e) => this.onchoose(e, i)}>{i}</p>
            </div>);
        }
        return items;
    }
    onchoose = (e, i) => {
        var newTable = parseInt(e.target.innerText);
        var table = this.state.table;
        var dem = 0;
        for (var i = 0; i < table.length; i++) {
            if (table[i] === newTable) {
                dem++;
                table.splice(i, 1);
                this.setState({
                    table: table,
                });
            }
        }
        if (dem === 0) {
            table.push(newTable);
            this.setState({
                table: table,
            });
        }



        console.log(this.state.table);
    }
}
export default View;