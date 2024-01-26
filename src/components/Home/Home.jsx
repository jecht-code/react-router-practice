import React from 'react';
import { useHistory } from 'react-router-dom';
import StudentForm from '../StudentForm/StudentForm';

function Home() {
    const history = useHistory();

    const handleClickNavToStudents = () => {
      // Navigate with React Router Dom
      // alert('Clicked To Nav');
      history.push('/AllStudents');
    };

    const handleClickNavToAbout = () => {
        // Navigate with React Router Dom
        // alert('Clicked To Nav');
        history.push('/About');
      };
  return (
    <div>
      <h1>HOME</h1>
      <button onClick={handleClickNavToStudents}>Go to Students</button>
      <button onClick={handleClickNavToAbout}>Go to About</button>
      <StudentForm />
    </div>
  );
}

export default Home;