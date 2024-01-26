import axios from 'axios';
import './App.css';
import StudentForm from '../StudentForm/StudentForm.jsx';
import StudentList from '../StudentList/StudentList.jsx';
import AllStudents from '../allStudents/allStudents.jsx';
import Home from '../Home/Home.jsx';
import About from '../About/About.jsx';
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <header className="App-header">
            <h1 className="App-title">GitHub Student List</h1>
            </header>
            <br/>
            <Router>
                <Route path="/" exact>
                    <Home />
                </Route>
                
                <Route path="/about" >
                    <About />
                </Route>

                <Route path="/allStudents" >
                    <AllStudents />
                </Route>

            </Router>
        </div>
    );
}

export default App;
