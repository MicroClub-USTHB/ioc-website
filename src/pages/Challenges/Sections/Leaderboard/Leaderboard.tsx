import { useDispatch, useSelector } from "react-redux";
import { useGetUserDataQuery } from "../../../../redux/api/backend";
import { setUser } from "../../../../redux/slices/user";
import { AppDispatch, RootState } from "../../../../redux/types";
import { User } from "../../../../types/User";
import PlaceHolder from "../../components/PlaceHolder/PlaceHolder";

// Components
import Board from "./components/Leaderboard/Leaderboard";
import Progress from "./components/Progress/Progress";

// Styles
import boardStyle from "./Leaderboard.module.scss";

const Leaderboard = () => {
    const user = useSelector<RootState>((state) => state.user) as User;
    const { data: userF, isLoading: loading } = useGetUserDataQuery();
    const dispatch = useDispatch<AppDispatch>();
    if (loading) return <PlaceHolder text={"Loading Data"} />;
    if (userF) dispatch(setUser(userF as User));
    return (
        <div className={boardStyle.container}>
            <Progress user={user} classname={boardStyle.Tab} />
            <Board user={user} classname={boardStyle.Tab} />
        </div>
    );
};

export default Leaderboard;
