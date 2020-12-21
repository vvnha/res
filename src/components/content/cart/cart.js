import { Component } from 'react';
import Footer from '../../footer/footer';
import Header from '../../header/header';
import Cover from './cover';
import YourCart from './yourCart';

class Contact extends Component {
    render() {
        return (
            <div>
                <Header />
                <Cover />
                <YourCart />
                <Footer />
            </div>
        );
    }
}
export default Contact;