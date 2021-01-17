import { Component } from 'react';
import Footer from '../../footer/footer';
import Header from '../../header/header';
import Cover from '../blog/cover';
import YourCart from './yourCart';

class Contact extends Component {
    render() {
        return (
            <div>
                <Header />
                <Cover name={'Your Cart'} />
                <YourCart />
                <Footer />
            </div>
        );
    }
}
export default Contact;