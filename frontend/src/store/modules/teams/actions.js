export const getTeamsRequest = () => ({
    type:'GET_TEAMS_REQUEST'
})

export const getTeamsSuccess = data => ({
    type:'GET_TEAMS_SUCCESS',
    payload:{data}
})

export const selectTeam = team => ({
    type:'SELECT_TEAM',
    payload:{team}
})

export const openTeamModal = () => ({
    type:'OPEN_TEAM_MODAL'
})

export const closeTeamModal = () => ({
    type:'CLOSE_TEAM_MODAL'
})


export const newTeamRequest = newTeam => ({
   type:'NEW_TEAM_REQUEST', 
   payload:{newTeam}
})

export const newTeamSuccess = (newTeamData) => ({
    type:'NEW_TEAM_SUCCESS',
    payload:{newTeamData}
})