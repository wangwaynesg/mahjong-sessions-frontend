import React from "react";
import { Link } from "react-router-dom";

const Session = (props) => {
    return (
        <tr>
            <td>
                <Link to={"/sessions/"+props.session._id}>{props.session.sessionName}</Link>
            </td>
            <td>
                {props.session.players.length}
            </td>
            <td>{props.session.sessionDate.substring(0, 10)}</td>
        </tr>
    );
}

export default Session;