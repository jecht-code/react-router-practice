import React from 'react';
import { useHistory } from 'react-router-dom';
import StudentForm from '../StudentForm/StudentForm';
import StudentList from '../StudentList/StudentList';


function AllStudents() {

  return (
    <div>
            <p>Student list:</p>
        <StudentList />
    </div>
  );
}

export default AllStudents;

