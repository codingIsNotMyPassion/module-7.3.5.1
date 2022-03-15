import "./App.css";
import { LandingPage } from "./LandingPage";
import { Switch, Route } from "react-router-dom";
import { SignupPage } from "./SignupPage";
import { EmailVerification } from "./EmailVerification";
import { LoginPage } from "./LoginPage";
import { Dashboard } from "./Dashboard";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>

        <Route path="/signup">
          <SignupPage />
        </Route>

        <Route path="/login">
          <LoginPage />
        </Route>

        <Route path="/forget-password">
          <ForgetPassword />
        </Route>

        <Route path="/users/:id/verify/:token">
          <EmailVerification />
        </Route>

        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

function ForgetPassword() {
  return (
    <div>
      <h1>Sorry working on it</h1>
    </div>
  );
}
