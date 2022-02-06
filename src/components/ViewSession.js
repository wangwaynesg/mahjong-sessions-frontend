import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


const ViewSession = () => {
    const { id } = useParams();

    const sessions = useSelector((state) => state.sessions);

    const session = sessions.filter(x => x._id === id)[0];

    return (
        <div>
            <h1>{session.sessionName}</h1>
            <div>
                Buy-in amount: ${session.buyInAmount}
            </div>
            <div>
                Number of chips per buy-in: {session.chipsPerBuyIn}
            </div>
            <div>
                Stakes: ${session.stakes.toFixed(2)}
            </div>

            <h3>Players</h3>
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
                        {session.players.map((x, i) => {
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
                                        {x.playerProfit !== Number(0) ? (x.playerProfit < 0 ? "-$" + Math.abs(x.playerProfit).toFixed(2) : "$" + x.playerProfit.toFixed(2)) : "-"}
                                    </td>
                                </tr>
                            );
                        })}
                        
                    </tbody>
                </table>
        </div>
        
    );
}

export default ViewSession;