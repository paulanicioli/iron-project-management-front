import React, { useState } from 'react';

import GeneralTemplate from '../../components/templates/GeneralTemplate';
import ProjectsTable from '../../components/organisms/ProjectsTable';
import CreateProjectForm from '../../components/organisms/CreateProjectForm'

import projectsList from '../../projects-mock';

const ProjectsList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [projects, setProjects] = useState(projectsList); // inicia com o array declarado acima!!

  const createProject = values => {
    return new Promise(resolve => { // SIMULANDO UMA CHAMADA ASSINCRONA!!!!!!
      setIsLoading(true);
      console.log('CADASTRAR NOVO PROJETO!!! -> ', values);
  
      setTimeout(() => {
        console.log('PROJETO CADASTRADO!!! ->');
        setIsLoading(false);
        resolve();
      }, 2000);
    })
  };

  return (
    <GeneralTemplate>
      <CreateProjectForm handleCreateProject={createProject} isLoading={isLoading} />
      <ProjectsTable projects={projects}/>
    </GeneralTemplate>
  );
};

export default ProjectsList;
