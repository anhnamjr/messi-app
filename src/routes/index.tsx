import { Home } from 'pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export default function RouteApp() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}
