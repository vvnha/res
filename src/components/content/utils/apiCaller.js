import axios from 'axios';
import * as Config from '../../../constants/config';


export default function callApi(endpoint, method = 'GET', body, header = null) {
    return axios({
        method: method,
        header: header,
        url: `${Config.API_URL}/${endpoint}`,
        data: body,
    }).catch(err => {
        console.log(err => this.setState({ err, isLoading: false }));
    });
}
