import { Component } from 'react';
import Footer from '../../footer/footer';
import Header from '../../header/header';
import Cover from './cover';
import OrderDetails from './orderedDetails';

class Details extends Component {
    render() {
        console.log(this.props.match);
        return (
            <div>
                {/* <Header />
                <Cover /> */}
                <OrderDetails match={this.props.match} />
                {/* <Footer /> */}
            </div>
        );
    }
}
export default Details;