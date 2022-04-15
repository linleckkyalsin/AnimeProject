import axios from 'axios';
let token=localStorage.getItem("auth_token");
const Axios=axios.create({
baseURL:'http://127.0.0.1:8000/api/',
headers: {'Authorization': `bearer ${token}`}
});



export default Axios;