import { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import callApi from '../utils/apiCaller';

class logout extends Component {
    check(){
        
        let token = JSON.parse(localStorage.getItem('token'));
        var header = {Authorization : `Bearer ${token}`};
        callApi('api/logout', 'GET', null, header).then(res => {
            if (res) {
                localStorage.removeItem('token');
                return <Redirect to="/" />
            }else{
                localStorage.removeItem('token');
                return <Redirect to="/" />
            }
        });
    }
    render() {
        //console.log(localStorage.getItem('token'));
        if(localStorage.getItem('token')===null){
            return <Redirect to="/" />
        }else{
            this.check();
        }
        return <Redirect to="/" />
        return (
            <div></div>
        );
    }
}
export default logout;