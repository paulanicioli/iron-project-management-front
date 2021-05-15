import React from 'react';

import GeneralTemplate from '../../components/templates/GeneralTemplate';

import projectsList from '../../projects-mock';

const ProjectDetail = props => {
  const [project, setProject] = React.useState({});

  React.useEffect(() => {
    const foundProject = projectsList.find(project => {
      return project._id === props.match.params.id
    });

    setProject(foundProject);
  }, []);

  return (
    <GeneralTemplate>
      <h1>Nome do Projeto: {project.name}</h1>
      <p>Descrição: {project.description}</p>

      <p>Tasks:</p>
      <ul>
        <li>Task 1</li>
        <li>Task 2</li>
        <li>Task 3</li>
      </ul>
    </GeneralTemplate>
  );
};

export default ProjectDetail;
