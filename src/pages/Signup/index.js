import React from 'react';

import GeneralTemplate from '../../components/templates/GeneralTemplate';
import SignupForm from '../../components/organisms/SignupForm';
import apiService from '../../services/api.services';

const Signup = (props) => {
  const handleCreateUser = async (values) => {
    try {
      await apiService.signupUser(values);

      props.history.push('/login');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <GeneralTemplate>
      <SignupForm handleCreateUser={handleCreateUser} />
    </GeneralTemplate>
  );
};

export default Signup;
