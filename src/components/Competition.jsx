import {Link} from "react-router-dom";

export default function Competition({competiton}) {
    return (
        <>
            <tr>
                <td>#</td>
                <td>{competiton.name}</td>
                <td>{competiton.fees}</td>
                <td>{competiton.date}</td>
                <td>
                    <Link to={`/competitiondetails/${competiton.id}`}>Details</Link>
                </td>
            </tr>


        </>
    )
}