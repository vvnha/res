import { Component } from 'react';

class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            user: []
        };
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
                                        <input type="text" className="form-control" id="name" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group" style={{ width: '100%' }}>
                                    <label htmlFor="email" className="label">Email</label>
                                    <div className="form-field-icon-wrap">
                                        <span className="icon ion-email"></span>
                                        <input type="email" className="form-control" id="email" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group" style={{ width: '100%' }}>
                                    <label htmlFor="phone" className="label">Phone</label>
                                    <div className="form-field-icon-wrap">
                                        <span className="icon ion-android-call"></span>
                                        <input type="text" className="form-control" id="phone" />
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
}
export default UserInfo;