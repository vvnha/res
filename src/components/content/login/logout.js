import { Component } from 'react';
import axios from 'axios';

class logout extends Component {
    render() {
        if(localStorage.getItem('token')==null){
            console.log(false);
        }else{
            //sessionStorage.removeItem('token');
        let token = JSON.parse(localStorage.getItem('token'));
        const api = `https://restaurantqn.herokuapp.com/api/user`;
        axios.get(api, { headers: {"Authorization" : `Bearer ${token}`} })
        .then(res => {
            // console.log(res.message);
            localStorage.removeItem('token');
        })
        }
        return (
            <div></div>
        );
    }
}
export default logout;