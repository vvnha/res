import React, { Component } from 'react';
import Footer from '../../footer/footer';
import Header from '../../header/header';
import Cover from './cover';
import Service from './service';
import Specialities from './specialities';
import Staff from './staff';
import InfoChef from './infochef';
import Menu from './menu';
import Events from './events';
import Choice from './choice';
class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="main-wrap">
                    <Cover />
                    <Service />
                    <Specialities />
                    <Staff />
                    <InfoChef />
                    <Menu />
                    <Events />
                    <Choice />
                </div>
                <Footer />
            </div>
        );
    }
}
export default Home;