import React, { useEffect, useState } from 'react';
import Select from 'react-select'
import api from '../../services/api'

import { useDispatch, useSelector } from 'react-redux';

import { memberModalClose, getMembersRequest,updateMemberRequest } from '../../store/modules/members/actions';

import Modal from '../Modal';
import { Button } from '../../styles/components/Button';
import { MembersList } from './styles';

export default function Members() {
    const [roles , setRoles] = useState([])

	const dispatch = useDispatch();
	const members = useSelector((state) => state.members.data);

	useEffect(() => {
        dispatch(getMembersRequest());
         
        async function getRoles(){
         const response = await api.get('roles')
     
         setRoles(response.data)
        }

        getRoles()
	}, []);

	

	function handleCancel() {
		dispatch(memberModalClose());
    }
    
    function handleRolesChange(id , roles){
       dispatch(updateMemberRequest(id, roles))
    }

	return (
		<Modal size="big">
			<h1>Membros</h1>
			<form action="">
				<MembersList>
					{members.map((member) => (
						<li key={member.id}>
							<strong>{member.user.name}</strong>
                            <Select 
                              isMulti
                              options={roles}
                              value={member.roles}
                              getOptionLabel={role => role.name}
                              getOptionValue={role => role.id}
                              onChange={value =>handleRolesChange(member.id , value)}
                            />
						</li>
					))}
				</MembersList>
				<Button onClick={handleCancel} filled={false} color="gray">
					Cancelar
				</Button>
			</form>
		</Modal>
	);
}
