import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

//Components
import Main from '../components/Main';
import Nav from '../partials/Nav';
import About from '../views/About';
import CreateExpense from '../views/CreateExpense';
import NotFound from '../views/NotFound';
import Expenses from '../views/Expenses';
import EditExpenses from '../views/EditExpenses';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Nav/>
            <Switch>
                <Route path="/" component={Main} exact={true}/>
                <Route path="/about" component={About}/>
                <Route path="/create" exact={true} component={CreateExpense}/>
                <Route path="/expenses" exact={true} component={Expenses}/>
                <Route path="/expenses/edit/:id" component={EditExpenses}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;