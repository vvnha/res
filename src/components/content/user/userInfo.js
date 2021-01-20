import { Component } from 'react';
import callApi from '../utils/apiCaller';

class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            user: [],
            name: '',
            email: '',
            phone: ''
        };
    }
    componentDidMount() {
        this.setState({
            isLoading: true,
        });

        if (localStorage.getItem('token')) {
            var token = localStorage.getItem('token');
            callApi('api/user', 'GET', null, { 'Authorization': `Bearer ${JSON.parse(token)}` }).then(res => {
                if (res) {
                    var data = res.data;
                    this.setState({
                        user: data,
                        isLoading: false,
                        name: data.name,
                        email: data.email,
                        phone: data.phone
                    });
                } else {
                    localStorage.removeItem('token');
                    console.log(res + "--Erro token!");
                }
            });
            this.setState({
                isLoading: false,
            });
        } else {
            this.setState({
                isLoading: false,
            });
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-md-8  text-center">
                        <h2 className="mb-3">User Edit</h2>
                        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum fuga, alias distinctio voluptatum magni voluptatibus.</p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-7 p-5 form-wrap">
                        <form action="#">
                            <div className="row">
                                <div className="form-group" style={{ width: '100%' }}>
                                    <label htmlFor="name" className="label">Name</label>
                                    <div className="form-field-icon-wrap">
                                        <span className="icon ion-android-person"></span>
                                        <input type="text" className="form-control" id="name" name="name" onChange={this.onChange} defaultValue={this.state.user.name ? this.state.user.name : ''} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group" style={{ width: '100%' }}>
                                    <label htmlFor="email" className="label">Email</label>
                                    <div className="form-field-icon-wrap">
                                        <span className="icon ion-email"></span>
                                        <input type="email" className="form-control" id="email" name="email" onChange={this.onChange} defaultValue={this.state.user.email ? this.state.user.email : ''} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group" style={{ width: '100%' }}>
                                    <label htmlFor="phone" className="label">Phone</label>
                                    <div className="form-field-icon-wrap">
                                        <span className="icon ion-android-call"></span>
                                        <input type="text" className="form-control" id="phone" name="phone" onChange={this.onChange} defaultValue={this.state.user.phone ? this.state.user.phone : ''} />
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-md-4">
                                    <a href="" className="btn btn-primary btn-outline-primary btn-block" onClick={this.onSubmit}>SUBMIT</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        );
    }
    onSubmit = (e) => {
        e.preventDefault();
        var { name, email, phone, user } = this.state;
        var body = {
            name: name,
            email: email,
            phone: phone
        }
        if (name !== '' && email !== '' && phone !== '') {
            if (localStorage.getItem('token')) {
                var token = localStorage.getItem('token');
                callApi(`api/user/${user.id}`, 'PATCH', body, { 'Authorization': `Bearer ${JSON.parse(token)}` }).then(res => {
                    if (res) {
                        alert('sua nguoi dung thanh cong');
                    }
                });
            }
        }
    }
    onChange = (e) => {
        var target = e.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }
}
export default UserInfo;