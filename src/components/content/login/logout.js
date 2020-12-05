import { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

class logout extends Component {
    render() {
        if(localStorage.getItem('token')==null){
            return <Redirect to="/" />
        }else{
            let token = JSON.parse(localStorage.getItem('token'));
            const api = `https://restaurantqn.herokuapp.com/api/user`;
            axios.get(api, { headers: {"Authorization" : `Bearer ${token}`} })
            .then(res => {
                // console.log(res.message);
                localStorage.removeItem('token');
                return <Redirect to="/" />
            }).catch(err => {
                    localStorage.removeItem('token');
                    return <Redirect to="/" />
                });
        }
        return (
            <div></div>
        );
    }
}
export default logout;