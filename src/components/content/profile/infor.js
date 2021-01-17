import { Component } from 'react';
import callApi from '../utils/apiCaller';

// "id": 5,
// "name": "test2",
// "email": "test2@gmail.com",
// "phone": "12345678910",
// "positionID": 3,
// "created_at": "2020-12-04 09:34:56",
// "updated_at": "2020-12-04 09:34:56"

class Infor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            isLoading: false,
        }
    }
    componentDidMount() {
        this.setState({
            isLoading: true,
        });
        if (localStorage.getItem('token') !== null) {
            var token = localStorage.getItem('token');
            callApi('api/user', 'GET', null, { 'Authorization': `Bearer ${JSON.parse(token)}` }).then(res => {
                if (res) {
                    var data = res.data;
                    this.setState({
                        user:data,
                        isLoading: false,
                    });
                    console.log(this.state.position);
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
                <h2 className="mb-3">THÔNG TIN CÁ NHÂN</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Họ Tên</th>
                            <th scope="col">{this.state.user.name}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Email</th>
                            <th scope="row">{this.state.user.email}</th>
                        </tr>
                        <tr>
                            <th>Vị trí</th>
                            <th scope="row">{this.state.user.positionID}</th>
                        </tr>
                        <tr>
                            <th>Mã ID</th>
                            <th scope="row">{this.state.user.id}</th>
                        </tr>
                        <tr>
                            <th>Ngày đăng ký</th>
                            <th scope="row">{this.state.user.created_at}</th>
                        </tr>
                        <tr>
                            <th>Cập nhật</th>
                            <th scope="row">{this.state.user.updated_at}</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Infor;


