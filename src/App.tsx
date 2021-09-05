import React, { useState } from "react";
import Router from "./Router";

import { useDispatch } from "react-redux";
import { AppDispatch } from "./redux/types";
import { setUser, removeUser } from "./redux/slices/user";
import { useReAuthenticateQuery } from "./redux/api/backend";
import { User } from "./types/User";

const App: React.FC = () => {
    const {
        data,
        error,
        isLoading: isAuthing,
    } = useReAuthenticateQuery(null, {
        pollingInterval: 60 * 60 * 1000,
    });
    const [isLoading, setLoading] = useState(false);

    const dispatch = useDispatch<AppDispatch>();

    if (!isAuthing) {
        if (error) dispatch(removeUser(error));
        else if (data) dispatch(setUser(data as User));
    }
    return <Router isLoading={isLoading || isAuthing} setLoading={setLoading} />;
};

export default App;
