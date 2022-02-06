import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ViewPlayer = () => {
    const { id } = useParams();

    const players = useSelector((state) => state.players);

    const player = players.filter(x => x._id === id)[0];

    return (
        <div>
            <h1>{player.playerName}</h1>
            <div>Net Profit: ${player.netProfit.toFixed(2)}</div>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Session name</th>
                        <th>Date</th>
                        <th>Profit</th>
                    </tr>
                </thead>
                <tbody>
                    {player.profitHistory.map((y, i) => {
                        return (
                            <tr key={i}>
                                <td>
                                    {/* can add improvement to "readmore" */}
                                    {/* <Link to={"/sessions/"+y.session._id}>{y.session.sessionName}</Link> */}
                                    {y.session.sessionName}
                                </td>
                                <td>
                                    {y.session.sessionDate.substring(0, 10)}
                                </td>
                                <td>
                                    {y.session.players.filter(b => b.playerName === player.playerName).map((z, j) => {
                                        return (
                                            <div key={y.session}>{z.playerProfit !== Number(0) ? (z.playerProfit < 0 ? "-$" + Math.abs(z.playerProfit).toFixed(2) : "$" + z.playerProfit.toFixed(2)) : "-"}</div>
                                        );
                                    })}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            {/* <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>
                            Profit History
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {player.profitHistory.map((y, i) => {
                        console.log(y);
                        return (
                            <tr key={i}>
                                <td>
                                    <h6>{y.session.sessionName}</h6>
                                    <div>
                                        Buy-in amount: ${y.session.buyInAmount}
                                    </div>
                                    <div>
                                        Number of chips per buy-in: {y.session.chipsPerBuyIn}
                                    </div>
                                    <div>
                                        Stakes: ${(y.session.buyInAmount / y.session.chipsPerBuyIn).toFixed(2)}
                                    </div>
                                    <table className="table">
                                        <thead className="thead-light">
                                            <tr>
                                                <th>Name</th>
                                                <th>Buy-ins</th>
                                                <th>Cash-out chips</th>
                                                <th>Profit</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {y.session.players.map((x, i) => {
                                                return (
                                                    <tr key={i}>
                                                        <td>
                                                            {x.playerName}
                                                        </td>
                                                        <td>
                                                            {x.playerBuyIns}
                                                        </td>
                                                        <td>
                                                            {x.playerChips}
                                                        </td>
                                                        <td>
                                                            {x.playerProfit !== Number(0) ? (x.playerProfit < 0 ? "-$" + Math.abs(x.playerProfit) : "$" + x.playerProfit) : "-"}
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table> */}
        </div>
        
    );
}

export default ViewPlayer;