import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/types";
import { NotificationsS, setShow } from "../../redux/slices/notifications";
import { UilExclamationOctagon, UilExclamationTriangle, UilCheckCircle } from "@iconscout/react-unicons";
const Notifications = () => {
    const notifications = useSelector<RootState>((state) => state.notifications) as NotificationsS;
    const dispatch = useDispatch<AppDispatch>();
    return (
        <div className={`Notifications ${notifications.shown ? "show" : ""}`}>
            {notifications.type === "error" ? (
                <UilExclamationOctagon />
            ) : notifications.type === "warning" ? (
                <UilExclamationTriangle />
            ) : (
                <UilCheckCircle />
            )}
            <div className="Container">
                <div className="Header">
                    <h2>{notifications.title}</h2>
                </div>
                <h3>{notifications.description}</h3>
            </div>
            <button
                onClick={(e) => {
                    dispatch(setShow(false));
                    e.preventDefault();
                }}
            >
                X
            </button>
        </div>
    );
};
export default Notifications;
