import { Component } from 'react';
import Footer from '../../footer/footer';
import Header from '../../header/header';
import Coverlogin from './coverlogin';
import Logincontent from './logincontent';

class Login extends Component {
    render() {
        return (
            <div>
                /<Header />
                <Coverlogin />
                <Logincontent />
                <Footer />
            </div>
        );
    }
}
export default Login;