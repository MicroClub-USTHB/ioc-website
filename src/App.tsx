import React from "react";
import Router from "./Router";

import { useDispatch } from "react-redux";
import { AppDispatch } from "./redux/types";
import { setUser, removeUser } from "./redux/slices/user";
import Spinner from "./common/Spinner/Spinner";
import { useReAuthenticateQuery } from "./redux/api/backend";
import { User } from "./types/User";

const App: React.FC = () => {
    const { data, error, isLoading } = useReAuthenticateQuery(null, {
        pollingInterval: 60 * 60 * 1000,
    });
    const dispatch = useDispatch<AppDispatch>();

    if (!isLoading) {
        if (error) dispatch(removeUser(error));
        else if (data) dispatch(setUser(data as User));
        return <Router />;
    } else return <Spinner />;
};

export default App;
