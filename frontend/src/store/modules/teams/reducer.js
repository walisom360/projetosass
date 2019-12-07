const INITIAL_STATE = {
    teamModalOpen:false,
    active:JSON.parse(localStorage.getItem('@Omni:team')) || null,
    data:[]
}


export default function teams(state = INITIAL_STATE, action){
   switch (action.type) {
       case 'GET_TEAMS_SUCCESS':
          return {...state,data:action.payload.data}
       case 'SELECT_TEAM':
           localStorage.setItem('@Omni:team',JSON.stringify(action.payload.team))
           return {...state ,active:action.payload.team }
       case 'OPEN_TEAM_MODAL':
            return {...state,teamModalOpen:true}
       case 'CLOSE_TEAM_MODAL':
          return {...state,teamModalOpen:false}
       case 'NEW_TEAM_SUCCESS':
           return {...state, data:[...state.data, action.payload.newTeamData]}   
        default:
           return state
   }
}