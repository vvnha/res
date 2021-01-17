import { Component } from 'react';
import callApi from '../utils/apiCaller';

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            user: [],
            name: '',
            email: '',
            phone: '',
            mess: ''
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
            <div>
                <div className="section" data-aos="fade-up">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-md-8  text-center">
                                <h2 className="mb-3">Contact Form</h2>
                                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum fuga, alias distinctio voluptatum magni voluptatibus.</p>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-10 p-5 form-wrap">
                                <form action="#">
                                    <div className="row mb-4">
                                        <div className="form-group col-md-4">
                                            <label htmlFor="name" className="label">Name</label>
                                            <div className="form-field-icon-wrap">
                                                <span className="icon ion-android-person"></span>
                                                <input type="text" className="form-control" id="name" name="name" onChange={this.onChange} defaultValue={this.state.user.name ? this.state.user.name : ''} />
                                            </div>
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label htmlFor="email" className="label">Email</label>
                                            <div className="form-field-icon-wrap">
                                                <span className="icon ion-email"></span>
                                                <input type="email" className="form-control" id="email" name="email" onChange={this.onChange} defaultValue={this.state.user.email ? this.state.user.email : ''} />
                                            </div>
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label htmlFor="phone" className="label">Phone</label>
                                            <div className="form-field-icon-wrap">
                                                <span className="icon ion-android-call"></span>
                                                <input type="text" className="form-control" id="phone" name="phone" onChange={this.onChange} defaultValue={this.state.user.phone ? this.state.user.phone : ''} />
                                            </div>
                                        </div>

                                        <div className="form-group col-md-12">
                                            <label htmlFor="message" className="label">Message</label>
                                            <textarea name="message" id="message" cols="30" rows="10" name="mess" className="form-control" onChange={this.onChange}></textarea>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-md-4">
                                            <input type="submit" className="btn btn-primary btn-outline-primary btn-block" value="Submit" onClick={this.onSubmit} />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="map-wrap" id="map" data-aos="fade"></div>
            </div>
        );
    }
    onSubmit = (e) => {
        e.preventDefault();
        var { name, email, phone, mess, user } = this.state;
        var body = {
            mess: mess
        }

        if (mess !== '') {
            //console.log(mess);
            if (localStorage.getItem('token')) {
                var token = localStorage.getItem('token');
                callApi(`api/contacts`, 'POST', body, { 'Authorization': `Bearer ${JSON.parse(token)}` }).then(res => {
                    if (res) {
                        alert('Lien he thanh cong');
                    }
                });
            }
        } else {
            alert('Vui long khong de trong!!!');
        }
        // if (name !== '' && email !== '' && phone !== '') {
        //     if (localStorage.getItem('token')) {
        //         var token = localStorage.getItem('token');
        //         callApi(`api/user/${user.id}`, 'PATCH', body, { 'Authorization': `Bearer ${JSON.parse(token)}` }).then(res => {
        //             if (res) {
        //                 alert('sua nguoi dung thanh cong');
        //             }
        //         });
        //     }
        // }
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

export default ContactForm;