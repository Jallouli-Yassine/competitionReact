import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getOne} from "../_services/api.js";
import AddPlayer from "./AddPlayer.jsx";
import {useSelector} from "react-redux";

export default function CompetitionDetails() {
    const param = useParams();
    const [comp, setComp] = useState("");
    const { participants, size } = useSelector((state) => state.participant);

    const [dataFromChild, setDataFromChild] = useState(false);
    console.log(dataFromChild);
    const handleChildData = (data) => {
        setDataFromChild(data);
    };

    const fetchcomp = async () => {
        const fetchedCompetition = (await getOne(param.id));
        setComp(fetchedCompetition);
    };

    const afficherForm = async () => {
        setDataFromChild(true)
    };

    useEffect(() => {
        fetchcomp();
    }, [comp]);

    return (
        <>
            <h1>Details</h1>
            <h3>{comp.name}</h3>
            <h3>{comp.fees}</h3>
            <h3>{comp.participants}</h3>
            <h3>{comp.date}</h3>
            <h3>{comp.description}</h3>


            <h2>Participants</h2>
            <ul>
                {participants.map((participant, index) => (
                    <li key={index}>{participant}</li>
                ))}
            </ul>
            <button onClick={afficherForm} disabled={comp.participants === 0}>participate</button>

            {
                dataFromChild && (
                    <AddPlayer comp={comp} handleChildData={handleChildData}/>
                )
            }
        </>
    )
}