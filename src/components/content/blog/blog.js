import { Component } from 'react';
import Footer from '../../footer/footer';
import Header from '../../header/header';
import Cover from './cover';
import Feeds from './feeds';

class Blog extends Component {
    render() {
        return (
            <div>
                <Header />
                <Cover name={'Blog Grid'} />
                <Feeds />
                <Footer />
            </div >
        );
    }
}
export default Blog;