
import './App.css';
import React from 'react';
import { Router, Route,Link,BrowserRouter, Switch} from 'react-router-dom';
import CreateApplicantForm from './createApplicantForm/createApplicantForm';
import SearchApplicantForm from './searchApplicantForm/searchApplicantForm';
import CreateJobForm from './createJobform/createJobForm';

function App() {
  return (

  <div>
    <nav className="sidenav">
        <ul>
          <li><a href="/addJob">Add Job</a></li>
          <li><a href="/addApplicant">Add Applicant</a></li>
          <li><a href="/searchApplicant">Search Applicant</a></li>
        </ul>
        
      </nav>
  <BrowserRouter>
        <Switch>
          <Route path="/addJob">
            <CreateJobForm />
          </Route>
          <Route path="/addApplicant">
            <CreateApplicantForm />
          </Route>
          <Route path="/searchApplicant">
            <SearchApplicantForm />
          </Route>
        </Switch>
      </BrowserRouter>
  </div>
  )
}

export default App;
