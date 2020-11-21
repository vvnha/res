import { Component } from 'react';
import Footer from '../../footer/footer';
import Header from '../../header/header';
import Cover from './cover';
import MenuList from '../home/menu';
import Specialities from '../home/specialities';
import Staff from '../home/staff';
class Menu extends Component {
    render() {
        return (
            <div>
                <Header />
                <Cover />
                <MenuList />
                <Specialities />
                <Staff />
                <Footer />
            </div >
        );
    }
}
export default Menu;