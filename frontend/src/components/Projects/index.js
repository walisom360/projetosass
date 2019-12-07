import React, { useEffect, useState } from 'react';
import { Container, Project } from './styles';

import { Button } from '../../styles/components/Button';
import Members from '../Members';

import Modal from '../Modal';
import {
	getProjectsRequest,
	createProjectRequest,
	projectModalOpen,
	projectModalClose
} from '../../store/modules/projects/actions';

import { memberModalOpen } from '../../store/modules/members/actions';

import { useDispatch, useSelector } from 'react-redux';

export default function Projects() {
	const [ newProject, setNewProject ] = useState('');

	const dispatch = useDispatch();
	const active = useSelector((state) => state.teams.active);
	const projects = useSelector((state) => state.projects.data);

	const openModalProject = useSelector((state) => state.projects.projectModalOpen);
	const openModalMembers = useSelector((state) => state.members.membersModalOpen);

	function handleOpenModal() {
		dispatch(projectModalOpen());
	}

	function handleCloseModal() {
		dispatch(projectModalClose());
	}

	function handleProjectSubmit(e) {
		e.preventDefault();

		dispatch(createProjectRequest(newProject));
	}

	function handleMemberModal() {
		dispatch(memberModalOpen());
	}

	useEffect(() => {
		dispatch(getProjectsRequest());
	}, []);

	if (!active) return null;
	return (
		<Container>
			<header>
				<h1>{active.name}</h1>
				<div>
					<Button onClick={handleOpenModal}>+ Novo</Button>
					<Button onClick={handleMemberModal}>Membros</Button>
				</div>
			</header>
			{projects.map((project) => (
				<Project key={project.id}>
					<p>{project.title}</p>
				</Project>
			))}
			{openModalProject && (
				<Modal>
					<h1>Criar Projeto</h1>
					<form onSubmit={handleProjectSubmit}>
						<span>NOME</span>
						<input type="text" onChange={(e) => setNewProject(e.target.value)} />
						<Button size="big" type="submit">
							CRIAR
						</Button>
						<Button size="small" color="gray" onClick={handleCloseModal}>
							Cancelar
						</Button>
					</form>
				</Modal>
			)}
			{openModalMembers && <Members />}
		</Container>
	);
}
