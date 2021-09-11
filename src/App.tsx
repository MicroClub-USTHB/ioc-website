import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./redux/types";
import { setUser, removeUser } from "./redux/slices/user";
import { Notify } from "./redux/slices/notifications";
import { useGetUserDataQuery } from "./redux/api/backend";
import { User } from "./types/User";
import "./common.scss";
import Router from "./Router";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query/fetchBaseQuery";
import { LangType } from "./common/Lang/french";

const App: React.FC = () => {
    const { 
        data,
        error,
        isLoading: isAuthing
    } = useGetUserDataQuery();
    const [isLoading, setLoading] = useState(false);
    const Lang = useSelector<RootState>((state) => state.common.Lang) as LangType;

    const dispatch = useDispatch<AppDispatch>();

    if (!isAuthing) {
        if (error) {
            switch ((error as FetchBaseQueryError).status) {
                case 422:
                    Notify(dispatch, {
                        title: Lang.errors.timeout.title,
                        description: Lang.errors.timeout.description,
                        type: "error",
                    });
                    break;
                default:
                    console.log(error);
                    break;
            }
            dispatch(removeUser());
        } else if (data) {
            dispatch(setUser(data as User));
        }
    }
    return <Router isLoading={isLoading || isAuthing} setLoading={setLoading} />;
};

export default App;
