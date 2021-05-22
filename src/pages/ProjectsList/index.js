import React, { useState, useEffect } from 'react';
import apiService from '../../services/api.services';

import GeneralTemplate from '../../components/templates/GeneralTemplate';
import ProjectsTable from '../../components/organisms/ProjectsTable';
import CreateProjectForm from '../../components/organisms/CreateProjectForm';

import projectsList from '../../projects-mock';

const ProjectsList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [projects, setProjects] = useState(projectsList); // inicia com o array declarado acima!!

  const getProjects = async () => {
    try {
      const response = await apiService.getProjects();
      setProjects(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  const createProject = async (values) => {
    try {
      setIsLoading(true);
      await apiService.createProject(values);
      await getProjects();
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <GeneralTemplate>
      <CreateProjectForm
        handleCreateProject={createProject}
        isLoading={isLoading}
      />
      <ProjectsTable projects={projects} />
    </GeneralTemplate>
  );
};

export default ProjectsList;
