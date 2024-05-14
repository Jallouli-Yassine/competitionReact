import {useEffect, useState} from "react";
import {getAll} from "../_services/api.js";
import Competition from "./Competition.jsx";

export default function Competitions() {

    const [competitons, setCompetitons] = useState([]);

    const fetchCompetitons = async () => {
        setCompetitons(await getAll());

    }
    useEffect(() => {
        fetchCompetitons();
    }, []);

    return (
        <>


            <table>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Fees</th>
                    <th>Date</th>
                    <th>Details</th>
                </tr>
                </thead>
                <tbody>
                {
                    competitons.map(competiton => (
                        <Competition key={competiton.id} competiton={competiton}/>
                    ))

                }

                </tbody>
            </table>


        </>
    )
}