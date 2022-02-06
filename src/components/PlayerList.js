import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Player from "./Player";
import { useDispatch } from "react-redux";
import { getPlayers } from "../actions/players";

const PlayerList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPlayers());
    }, [dispatch]);

    const players = useSelector((state) => state.players);

    return (
        <div>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Player</th>
                        <th>Net Profit</th>
                    </tr>
                </thead>
                <tbody>
                    {players.slice().map((player) => (
                        <Player key={player._id} player={player}/>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PlayerList;