import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

// pages

import Navigation from "./components/Navigation/Navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./redux/types";
import { removeUser } from "./redux/slices/user";
import Loader from "./components/Loader/Loader";
import Challenges from "./pages/Challenges/Challenges";
import { useLogOutMutation } from "./redux/api/backend";
import { User } from "./types/User";
import Leaderboard from "./pages/Challenges/Sections/Leaderboard/Leaderboard";

const Landing = React.lazy(() => import("./pages/Landing/Landing"));
const Auth = React.lazy(() => import("./pages/Signup/Auth"));

const App: React.FC<{ isLoading: boolean; setLoading: any }> = ({ isLoading = false, setLoading }) => {
    const [logout, { isLoading: isLoggingOut }] = useLogOutMutation();
    const user = useSelector<RootState>((state) => state.user) as User | null;
    const dispatch = useDispatch<AppDispatch>();
    if (isLoggingOut) setLoading(true);
    return (
        <React.Suspense fallback={<Loader />}>
            <Router>
                <Navigation />
                <Switch>
                    <Route path="/" exact component={Landing} />
                    <Route
                        path={["/auth", "/signin", "/login", "/connexion", "/signup", "/register", "/inscrire"]}
                        exact
                        render={(props) => (!user ? <Auth {...props} /> : <Redirect to="/challenges" />)}
                    />
                    <Route
                        path={["/challenges", "/defis"]}
                        render={(props) => (user ? <Challenges {...props} /> : <Redirect to="/signin" />)}
                    />
                    <Route
                        path={["/logout"]}
                        render={() => {
                            logout()
                                .then((res) => dispatch(removeUser(res)))
                                .catch(console.error);
                            return <Redirect to="/" />;
                        }}
                    />
                    <Route path={`/leaderboard`} component={Leaderboard} />
                </Switch>
            </Router>
        </React.Suspense>
    );
};

export default App;
