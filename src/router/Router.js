import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from '../pages/AboutPage';
import DetailsPage from './pages/DetailsPage';
import NotFoundPage from './pages/NotFoundPage';

function AppRouter() {
    return (
    <Router>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/details" component={DetailsPage} />
            <Route path="/details/:id" component={DetailsPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </Router>
);
}

export default AppRouter;
