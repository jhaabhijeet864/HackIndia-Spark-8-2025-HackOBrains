import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <h1>Hackmentor AI</h1>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/" exact>
                        <h2>Welcome to Hackmentor AI</h2>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;