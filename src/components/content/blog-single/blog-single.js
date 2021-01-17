import { Component } from 'react';
import Footer from '../../footer/footer';
import Header from '../../header/header';
import Cover from './cover';
import New from './new';
import Categories from './categories';
class BlogSingle extends Component {
    render() {
        return (
            <div>
                <Header />
                <Cover />
                <div className="section">
                    <div className="container">
                        <div className="row">
                            <New />
                            <Categories />
                        </div>
                    </div>
                </div>
                <Footer />
            </div >
        );
    }
}
export default BlogSingle;