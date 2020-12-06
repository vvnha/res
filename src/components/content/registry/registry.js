import { Component } from 'react';
import Footer from '../../footer/footer';
import Header from '../../header/header';
import Coverregistry from './coverregistry';
import Registrycontent from './registrycontent';

class Registry extends Component {
    render() {
        return (
            <div>
                <Header />
                <Coverregistry />
                < Registrycontent />
                <Footer />
            </div>
        );
    }
}
export default Registry;