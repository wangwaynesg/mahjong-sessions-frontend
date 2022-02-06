import React from "react";
import { useSelector } from "react-redux";
import Session from "./Session";

const SessionList = () => {
    const sessions = useSelector((state) => state.sessions);

    return (
        <div>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Session name</th>
                        <th>Players</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {sessions.slice().reverse().map((session) => (
                        <Session key={session._id} session={session}/>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default SessionList;