import {put , call,all, takeLatest} from 'redux-saga/effects'
import {actions as toastrActions} from 'react-redux-toastr'
import api from '../../../services/api'

import {closeTeamModal,getTeamsSuccess ,newTeamSuccess} from './actions'


function* getTeams(){
   const {data} = yield call(api.get,'teams')

   yield put(getTeamsSuccess(data))
}

function* newTeam({payload}){
  try{
    const {newTeam} = payload
    const {data} = yield call(api.post ,'teams',{name:newTeam})
  
    yield put(newTeamSuccess(data))
    yield put(closeTeamModal())

  }catch(err){
    yield put(toastrActions.add({
       type:'error',
        title:'Erro na operação',
        message:'Houve um erro tente novamente'
    }))
  }
  
}




export default all([
    takeLatest('GET_TEAMS_REQUEST',getTeams),
    takeLatest('NEW_TEAM_REQUEST',newTeam)
])