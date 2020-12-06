import { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
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
        if (localStorage.getItem('token')) {
            //return <Redirect to="/" />
            let token = JSON.parse(localStorage.getItem('token'));
            const api = `https://restaurantqn.herokuapp.com/api/user`;
            axios.get(api, { headers: { "Authorization": `Bearer ${token}` } })
                .then(res => {
                    localStorage.removeItem('token');
                }).catch(err => {
                    localStorage.removeItem('token');
                });
            return <Redirect to="/" />
        } else {
            return <Redirect to="/" />
        }

        // }
        // return (
        //     <div></div>
        // );
    }
}
const mapStateToProps = state => {
    return {
        foods: state.foods,
        token: state.tokens
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(logout);