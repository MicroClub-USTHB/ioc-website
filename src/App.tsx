import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

// pages
import Landing from "./pages/Landing/Landing";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import Challenges from "./pages/Challenges/Challenges";
import { useReAuthenticateQuery,useLogOutMutation } from "./redux/api/backend";

const App: React.FC = () => {
    const [logout]=useLogOutMutation();
    useReAuthenticateQuery(null, {
        pollingInterval: 60 * 60 * 1000,
    });
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route
                    path={["/signin", "/login", "/connexion"]}
                    exact
                    render={(props) =>
                        !localStorage.getItem("User") ? <Signin {...props} /> : <Redirect to="/challenges" />
                    }
                />
                <Route
                    path={["/signup", "/register", "/inscrire"]}
                    exact
                    render={(props) =>
                        !localStorage.getItem("User") ? <Signup {...props} /> : <Redirect to="/challenges" />
                    }
                />
                <Route
                    path={["/challenges", "/defis"]}
                    render={(props) =>
                        localStorage.getItem("User") ? <Challenges {...props} /> : <Redirect to="/signin" />
                    }
                />
                <Route
                    path={["/logout"]}
                    render={() => {
                        localStorage.removeItem("User");
                        logout();
                        return <Redirect to="/" />;
                    }}
                />
            </Switch>
        </Router>
    );
};

export default App;
