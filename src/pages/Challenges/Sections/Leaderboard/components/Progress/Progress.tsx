import { User } from "../../../../../../types/User";

// Components
import Day from "./components/Day/Day";

// Styles
import progStyle from "./Progress.module.scss";

const Progress = ({ classname, user }: { classname: string; user: User }) => {
    return (
        <div className={classname}>
            <h2 className={progStyle.title}>Your Story So Far</h2>
            <div className={progStyle.days}>
                {user?.days.map((day) => (
                    <Day
                        key={day.number}
                        title={`Day ${day.number}`}
                        main={{
                            completed: !!day.completed.main.completed,
                            points: day.completed.main.score,
                        }}
                        side={{
                            completed: !!day.completed.side.completed,
                            points: day.completed.side.score,
                        }}
                    />
                ))}
            </div>
            <span className={progStyle.total}>
                Score Total:
                <span className={progStyle.points}>
                    {" "}
                    {user?.scores[Number(new Date().getFullYear())].toFixed(0)} Points
                </span>
            </span>
        </div>
    );
};

export default Progress;
