import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { AuthProvider } from '../contexts/AuthContext';
import PrivateRoute from './PrivateRoute';
//componentes
import Signup from './Signup';
import Dashboard from './Dashboard';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import UpdatePorfile from './UpdatePorfile';
import UploadForm from './UploadForm';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard}/>
            <PrivateRoute path="/update-profile" component={UpdatePorfile}/>
            <PrivateRoute path="/upload-form" component={UploadForm}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/login" component={Login}/>
            <Route path="/forgot-password" component={ForgotPassword}/>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
