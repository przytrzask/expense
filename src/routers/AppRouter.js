import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddExpencePage from '../components/AddExpence';
import EditExpencePage from '../components/EditExpence';
import ExpenseDashboardPage from '../components/ExpenseDashboard';
import Header from '../components/Header';
import HelpPage from '../components/Help';
import NotFound from '../components/NotFound';



const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpencePage} />
        <Route path="/edit/:id" component={EditExpencePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;



