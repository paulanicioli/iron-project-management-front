import React, { useState } from 'react';

import GeneralTemplate from '../../components/templates/GeneralTemplate';
import ProjectsTable from '../../components/organisms/ProjectsTable';
import CreateProjectForm from '../../components/organisms/CreateProjectForm'

const projectsExample = [
  {
    _id: '1',
    name: 'Project 1',
    description: 'A super cool description!!!',
  },
  {
    _id: '2',
    name: 'Project 2',
    description: 'A super DUPER cool description!!!',
  }
];

const ProjectsList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [projects, setProjects] = useState(projectsExample); // inicia com o array declarado acima!!

  const createProject = values => {
    return new Promise(resolve => {
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
