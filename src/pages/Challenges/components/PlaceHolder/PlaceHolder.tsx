import Loader from "../../../../components/Loader/Loader";

const PlaceHolder = ({ text }: { text: string }) => {
    return (
        <div className="loader_container">
            <Loader transparent={true} />
            <p>{text}</p>
        </div>
    );
};
export default PlaceHolder;
