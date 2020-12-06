import { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import callApi from '../utils/apiCaller';

class logout extends Component {
    constructor(props) {
        super(props);
        let checktoken = false
        this.state = {
            checktoken
        }
    }
    render() {
        //console.log(localStorage.getItem('token'));
        if(localStorage.getItem('token')===null){
            return <Redirect to="/" />
        }else{
            if(!this.state.checktoken){
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
                this.setState({checktoken: true});
            }
        }
        return <Redirect to="/" />
        return (
            <div></div>
        );
    }
}
export default logout;