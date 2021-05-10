import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Login = lazy(() => import('./pages/login'));

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}></Suspense>
      <Switch>
        <Route path="/login" component={ } />
      </Switch>
    </Router>

  );
}

export default App;
