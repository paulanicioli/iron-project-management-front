import React from 'react';

import GeneralTemplate from '../../components/templates/GeneralTemplate';
import SignupForm from '../../components/organisms/SignupForm';

const Signup = (props) => {
  const handleCreateUser = async (values) => {
    console.log(values);
  };
  return (
    <GeneralTemplate>
      <SignupForm handleCreateUser={handleCreateUser} />
    </GeneralTemplate>
  );
};

export default Signup;
