import {useState} from "react";
import {addToparticipant} from "../state/whichlist/whichlistslice.ts";
import {useDispatch} from "react-redux";
import {updateOne} from "../_services/api.js";

export default function AddPlayer({comp,handleChildData }) {

    const dispatch = useDispatch();

    const [participantName, setParticipantName] = useState("");

    const updateCompetition = async () => {
        const newComp = {
            ...comp,
            participants: comp.participants -1,
        };
        const fetchedCompetition = (await updateOne(comp.id,newComp));
    };
    const handleInputChange = (event) => {
        setParticipantName(event.target.value);
    };
    const handleAddToPariticipants = (event) => {
        event.preventDefault();
        dispatch(addToparticipant(participantName));
        updateCompetition();

        handleChildData(false); // Send data to parent

    };

    return (
        <>
            <h5>user name</h5>
            <form>
                <input
                    type="text"
                    placeholder="Search movies..."
                    value={participantName}
                    onChange={handleInputChange}
                />
                <button onClick={handleAddToPariticipants}>Confirm</button>
            </form>

        </>
    )
}