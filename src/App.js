import Header from "./component/Header";
import Trending from "./component/Trending";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Popular from "./component/Popular";
import AnimeList from "./component/AnimeList";
import AnimePanel from "./component/AnimePanel";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";
import AnimeProvider from "./component/store/AnimeProvider";
import axios from "axios";
axios.defaults.baseURL="http://127.0.0.1:8000/";
axios.defaults.headers.post['Content-Type'] ='application/json';
axios.defaults.headers.post['Accept'] ='application/json';

axios.defaults.withCredentials = true;
const token = localStorage.getItem('auth_token');
axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
axios.defaults.headers = {
  Authorization: 'Bearer ' + token
}
// axios.defaults.headers.common['Authorization']='Bearer '+localStorage.getItem('auth_token')
// axios.interceptors.request.use(function (config) {

//     config.headers.Authorization = token ? `Bearer ${token}`:'';
//     return config;
// });


// const token = localStorage.getItem('auth_token');
// axios.post('http://127.0.0.1:8000/api/logout' , { headers: {"Authorization" : `Bearer ${token}`} })
// .then(res => {
// console.log(res.data);})
// .catch((error) => {
//   console.log(error)
// });



// const axiosInstance = axios.create({
//   baseURL: process.env.REACT_APP_BASE_URL,
// });

// axiosInstance.interceptors.request.use(
//   (config) => {
  
//     const auth = token ? `Bearer ${token}` : '';
//     config.headers.common['Authorization'] = auth;
//     return config;
//   },
//   (error) => Promise.reject(error),
// );
function App() {
  
  return (
    <div>
     <AnimeProvider>
    <BrowserRouter>
      <MainRouter/>
    </BrowserRouter>
    </AnimeProvider>
    </div>
  );
}

export default App;
