import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

// pages
import Landing from "./pages/Landing/Landing";
import Signin from "./pages/Signin/Signin";
import Signup from "./pages/Signup/Signup";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./redux/types";
import { removeUser } from "./redux/slices/user";
import Spinner from "./common/Spinner/Spinner";
import Challenges from "./pages/Challenges/Challenges";
import { useLogOutMutation } from "./redux/api/backend";
import { User } from "./types/User";

const App: React.FC = () => {
    const [logout, { isLoading: isLoggingOut }] = useLogOutMutation();
    const user = useSelector<RootState>((state) => state.user) as User | null;
    const dispatch = useDispatch<AppDispatch>();
    if (isLoggingOut) return <Spinner />;
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route
                    path={["/signin", "/login", "/connexion"]}
                    exact
                    render={(props) => (!user ? <Signin {...props} /> : <Redirect to="/challenges" />)}
                />
                <Route
                    path={["/signup", "/register", "/inscrire"]}
                    exact
                    render={(props) => (!user ? <Signup {...props} /> : <Redirect to="/challenges" />)}
                />
                <Route
                    path={["/challenges", "/defis"]}
                    render={(props) => (user ? <Challenges {...props} /> : <Redirect to="/signin" />)}
                />
                <Route
                    path={["/logout"]}
                    render={() => {
                        logout()
                            .then((res) => {
                                dispatch(removeUser(res));
                            })
                            .catch(console.error);
                        return <Redirect to="/" />;
                    }}
                />
            </Switch>
        </Router>
    );
};

export default App;
