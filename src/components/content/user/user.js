import { Component } from 'react';
import Footer from '../../footer/footer';
import Header from '../../header/header';
import Cover from '../blog/cover';
import UserInfo from "./userInfo";

class User extends Component {
    render() {
        return (
            <div>
                <Header />
                <Cover name={"User Information"} />
                <UserInfo />
                <Footer />
            </div>
        );
    }
}
export default User;