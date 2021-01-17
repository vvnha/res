import { Component } from 'react';
import Footer from '../../footer/footer';
import Header from '../../header/header';
import Cover from '../blog/cover';
import ContactForm from './contactForm';
import Reviews from './reviews';

class Contact extends Component {
    render() {
        return (
            <div>
                <Header />
                <Cover name={'Contact Us'} />
                <ContactForm />
                <Reviews />
                <Footer />
            </div>
        );
    }
}
export default Contact;