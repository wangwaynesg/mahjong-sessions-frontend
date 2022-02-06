import React from "react";
import { Link } from "react-router-dom";

const Player = (props) => {
    return (
        <tr>
            <td>
                <Link to={"/players/"+props.player._id}>{props.player.playerName}</Link>
            </td>
            <td>
                {props.player.netProfit !== Number(0) ? (props.player.netProfit < 0 ? "-$" + Math.abs(props.player.netProfit).toFixed(2) : "$" + props.player.netProfit.toFixed(2)) : "-"}
            </td>
        </tr>
    );
}

export default Player;