import axios from 'axios';
import store from '../store/createStore'

const api = axios.create({
  baseURL: 'http://localhost:3333'
});

api.interceptors.request.use((config)=>{
  const {token}  = store.getState().auth
  const {active:team} = store.getState().teams

  const headers = {...config.headers}

  //enviar um HEADER contendo as informações do time atual do usuario
  if(token){
    headers.Authorization = `Bearer ${token}`
  }

  if(team){
    headers.TEAM = team.slug
  }

  return {...config , headers}

})


export default api;
