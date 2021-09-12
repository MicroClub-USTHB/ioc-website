import { useGetLeaderboardQuery } from "../../../../../../redux/api/backend";

import { User } from "../../../../../../types/User";

// components
import Participant from "./components/Participant";

// styles
import boardStyle from "./Leaderboard.module.scss";

const LeaderBoard = ({ classname, user }: { classname: string; user: User }) => {
    const { data, isLoading } = useGetLeaderboardQuery(null);

    return (
        <div className={classname}>
            <h2 className={boardStyle.title}>LeaderBoard</h2>
            <div className={boardStyle.display}>
                {!isLoading &&
                    data?.map((participant, index) => (
                        <Participant
                            key={participant._id}
                            position={index + 1}
                            name={participant.userName}
                            score={participant.scores[2021]}
                            isUser={user._id === participant._id}
                        />
                    ))}
            </div>
        </div>
    );
};

export default LeaderBoard;
