import { Component } from 'react';
import Footer from '../../footer/footer';
import Header from '../../header/header';
import Cover from '../blog/cover';
import MenuList from '../home/menu';
import Specialities from '../home/specialities';
import Staff from '../home/staff';
class Menu extends Component {
    render() {
        return (
            <div>
                <Header />
                <Cover name={"Restaurant's Menu"} />
                <MenuList />
                <Specialities />
                <Staff />
                <Footer />
            </div >
        );
    }
}
export default Menu;