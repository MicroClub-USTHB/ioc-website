import { useGetLeaderboardQuery } from "../../../../../../redux/api/backend";

// components
import Participant from "./components/Participant";

// styles
import boardStyle from "./Leaderboard.module.scss";

const Leaderboard = () => {
    const { data, isLoading } = useGetLeaderboardQuery(null);

    return (
        <div className={boardStyle.board}>
            <h1 className={boardStyle.title}>Leaderboard</h1>
            <div className={boardStyle.display}>
                {!isLoading &&
                    data?.map((participant, index) => (
                        <Participant
                            key={participant._id}
                            position={index + 1}
                            name={participant.userName}
                            score={participant.scores[2021]}
                        />
                    ))}
            </div>
        </div>
    );
};

export default Leaderboard;
