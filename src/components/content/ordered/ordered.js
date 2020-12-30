import { Component } from 'react';
import Footer from '../../footer/footer';
import Header from '../../header/header';
import Cover from './cover';
import ViewOrder from './viewOrder';

class Ordered extends Component {
    render() {
        return (
            <div>
                <Header />
                <Cover />
                <ViewOrder match={this.props.match} location={this.props.location} />
                <Footer />
            </div>
        );
    }
}
export default Ordered;