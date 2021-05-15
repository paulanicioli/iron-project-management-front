import React from 'react';

import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

import './ProjectsTable.scss';

const ProjectsTable = ({ projects }) => { // espera receber PROJETOS como prop!!
  return (
    <Table striped bordered hover variant="dark" className="projects-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {projects.map(project => (
          <tr key={project._id}>
              <td>{project._id}</td>
              <td>
                <Link to={`/projects/${project._id}`}>
                  {project.name}
                </Link>
              </td>
              <td>{project.description}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ProjectsTable;
