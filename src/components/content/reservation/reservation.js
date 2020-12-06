import { Component } from 'react';
import Footer from '../../footer/footer';
import Header from '../../header/header';
import Cover from './cover';
import ReserForm from './reserFrom';
import Reviews from '../contact/reviews';

class Reser extends Component {
    render() {
        return (
            <div>
                <Header />
                <Cover />
                <ReserForm />
                <Reviews />
                <Footer />
            </div>
        );
    }
}
export default Reser;