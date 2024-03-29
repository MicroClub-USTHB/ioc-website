// Styles
import partStyle from "./Participant.module.scss";

interface ParticipantProps {
    position: number;
    name: string;
    score: number;
    isUser?: boolean;
}

const Participant = (props: ParticipantProps) => {
    const { name, position, score, isUser } = props;
    return (
        <>
            <div className={partStyle.container}>
                <span className={partStyle.position}>{position}</span>
                <div className={partStyle.info}>
                    <span className={`${partStyle.name} ${isUser && partStyle.user}`}>{name}</span>
                    <span className={partStyle.score}>{score.toFixed(0)} Points</span>
                </div>
            </div>
        </>
    );
};

export default Participant;
