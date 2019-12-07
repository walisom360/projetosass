import React,{useState, useEffect} from 'react'
import {Container , TeamList,Team,NewTeam,Logout } from './styles'
import {useDispatch , useSelector} from 'react-redux'
import {getTeamsRequest , selectTeam ,openTeamModal,closeTeamModal , newTeamRequest  } from '../../store/modules/teams/actions'
import {signOut} from '../../store/modules/auth/actions'

import Modal from '../Modal'
import {Button} from '../../styles/components/Button'

export default function TeamSwitcher(){
    
    const [team , setTeam] = useState('')

    const dispatch = useDispatch()
    const teams = useSelector(state => state.teams.data)

    const modalOpen = useSelector(state => state.teams.teamModalOpen)
    
    console.log(teams)
    useEffect(()=>{
      dispatch(getTeamsRequest())
    },[])


    function handleSelectTeam(team){
       dispatch(selectTeam(team))
    }


    function handleOpenModal(){
     dispatch(openTeamModal())
    }

    function handleCloseModal(){
     dispatch(closeTeamModal())
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(newTeamRequest(team))
    }

    function handleClose(){
        dispatch(signOut())
    }

    return(
     <Container>
     
       <TeamList>
         {teams.map(team => (
          <Team key={team.id} onClick={() => handleSelectTeam(team)}>
          <img  alt={team.name}  src={`https://ui-avatars.com/api/?font-size=0.33&background=7159c1&color=fff&name=${team.name}`} />
        
          </Team>
         ))}  

         <NewTeam onClick={handleOpenModal}>NOVO</NewTeam>

         {
         modalOpen &&
          <Modal size="big">
           <h1>CRIAR TIME</h1>  
            <form onSubmit={handleSubmit}>
             <span>NOME</span>
             <input name="newTeam" onChange={e => setTeam(e.target.value)} />
             <Button size="big" type="submit">Salvar</Button>
             <Button size="small" color="gray" onClick={handleCloseModal}>Cancelar</Button>
            </form>  
          </Modal>
          
          }
       </TeamList>
       <Logout onClick={handleClose}>SAIR</Logout>
     </Container>

    )
}
