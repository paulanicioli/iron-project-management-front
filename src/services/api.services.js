import axios from 'axios';

class apiService {
  constructor() {
    this.api = axios.create({
      baseUrl: process.env.REACT_APP_BACKEND_URL,
    });

    this.api.interceptors.request.use((config) => {
      console.log(config);
      config.headers.banana = 'maçã';
      return config;
    }); //aqui conseguimos colocar qualquer informação dentro do request ANTES de ele ser feito para a API
  }

  getProjects = async () => {
    const { data } = await this.api.get('/projects');

    return data;
  };

  createProject = async (projectData) => {
    await this.api.post('/projects', projectData);
  };
}

export default new apiService();
