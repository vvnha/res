import { Component } from 'react';
import Footer from '../../footer/footer';
import Header from '../../header/header';
import Cover from './cover';
import History from './history';
import Choice from '../home/choice';
import Chefs from './chefs';
class About extends Component {
    render() {
        return (
            <div>
                <Header />
                <Cover />
                <History />
                <Choice />
                <Chefs />
                <Footer />
            </div >
        );
    }
}
export default About;