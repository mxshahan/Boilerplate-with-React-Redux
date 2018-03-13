import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';

//Components
import Main from '../components/Main';
import About from '../views/About';
import CreateExpense from '../views/CreateExpense';
import NotFound from '../views/NotFound';
import Expenses from '../views/Expenses';
import EditExpenses from '../views/EditExpenses';
import Login from '../views/Login';
import SignUp from '../views/SignUp';
import Profile from '../views/Profile';
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './PrivateRouter';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PrivateRoute path="/" component={Main} exact={true}/>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
                <PrivateRoute path="/profile" component={Profile} />
                <PrivateRoute path="/about" component={About}/>
                <PrivateRoute path="/create" exact={true} component={CreateExpense}/>
                <PrivateRoute path="/expenses" exact={true} component={Expenses}/>
                <PrivateRoute path="/expenses/edit/:id" component={EditExpenses}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </Router>
)

export default AppRouter;