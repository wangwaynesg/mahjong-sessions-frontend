import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { updatePlayer } from "../actions/players";

import { createSession } from "../actions/sessions";

const CreateSession = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [sessionData, setSessionData] = useState({
        sessionName: "",
        buyInAmount: Number(20),
        chipsPerBuyIn: Number(200),
        stakes: Number(),
        players: [],
    });

    const [playerList, setPlayerList] = useState([]);

    const [netProfit, setNetProfit] = useState(0);

    const handlePlayerInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...playerList];
        playerList[index][name] = value;

        playerList[index]["playerProfit"] = Number(sessionData.buyInAmount * (playerList[index]["playerChips"] / sessionData.chipsPerBuyIn - playerList[index]["playerBuyIns"])).toFixed(2);
        
        setPlayerList(list);
        setSessionData({ ...sessionData, players:list });

        var tempProfit = Number(0);
        list.forEach(x => {
            tempProfit = Number(tempProfit) + Number(x.playerProfit);
        })
        setNetProfit(tempProfit.toFixed(2));
    };

    const handlePlayerRemoveClick = (index, e) => {
        e.preventDefault();
        const temp = playerList[index]["playerProfit"];
        const list = [...playerList];
        list.splice(index, 1);
        setPlayerList(list);
        setSessionData({ ...sessionData, players:list });
        setNetProfit((Number(netProfit) - Number(temp)).toFixed(2));
    };

    const handlePlayerAddClick = (e) => {
        e.preventDefault();
        const list = [...playerList];
        list.push({
            playerName: "",
            playerBuyIns: 1,
            playerChips: "",
            playerProfit: -sessionData.buyInAmount
        });

        setPlayerList(list);
        setSessionData({ ...sessionData, players:list });
        setNetProfit((Number(netProfit) - Number(sessionData.buyInAmount)).toFixed(2));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        if (playerList.length === 0) {
            alert("you never even put any players smlj wdym cb don't try to crash my website hor");
            return;
        }

        if (Number(netProfit) !== 0) {
            alert("Money doesn't check out leh! Net profits not zero!");
            return;
        }

        if (window.confirm("Are you done with the final ledger/tabulations?")) {
            sessionData.stakes = sessionData.buyInAmount / sessionData.chipsPerBuyIn;
            dispatch(createSession(sessionData));
            for (let i = 0; i < sessionData.players.length; i++) {
                let playerData = {
                    "playerName": sessionData.players[i].playerName,
                    "playerProfit": sessionData.players[i].playerProfit,
                    "session": {
                        sessionName: sessionData.sessionName,
                        buyInAmount: sessionData.buyInAmount,
                        chipsPerBuyIn: sessionData.chipsPerBuyIn,
                        stakes: sessionData.buyInAmount / sessionData.chipsPerBuyIn,
                        players: sessionData.players
                    }
                };
                dispatch(updatePlayer(playerData));
            }
        }
        history.push("/");
    };

    return (
        <div> 
            <form onSubmit={onSubmit}>
                <div style={{padding: "1%"}}>
                    <h3>New session</h3>

                    <div className="form-group">
                        <label>Session name:</label>
                        <input type="text"
                            required 
                            className="form-control" 
                            placeholder="Mahjong $0.20/$0.40 Shooter Pay"
                            value={sessionData.sessionName} 
                            onChange={(e) => setSessionData({ ...sessionData, sessionName: e.target.value })}
                        />
                    </div>

                    <div className="form-group">
                        <label>Buy-in amount (SGD):</label>
                        <input type="text"
                            required 
                            className="form-control" 
                            value={sessionData.buyInAmount} 
                            onChange={(e) => setSessionData({ ...sessionData, buyInAmount:e.target.value })}
                        />
                    </div>

                    <div className="form-group">
                        <label>Number of chips per buy-in:</label>
                        <input type="text"
                            required 
                            className="form-control" 
                            value={sessionData.chipsPerBuyIn} 
                            onChange={(e) => setSessionData({ ...sessionData, chipsPerBuyIn:e.target.value })}
                        />
                    </div>
                </div>

                <div style={{padding: "1%"}}>
                    <h3>Players</h3>
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th>Name</th>
                                <th>Buy-ins</th>
                                <th>Cash-out chips</th>
                                <th>Profit</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {playerList.map((x, i) => {
                                return (
                                    <tr key={i}>
                                        <td>
                                            <input className="form-control" name="playerName" value={x.playerName} onChange={(e) => handlePlayerInputChange(e, i)}/>
                                        </td>
                                        <td>
                                            <input className="form-control" name="playerBuyIns" value={x.playerBuyIns} onChange={(e) => handlePlayerInputChange(e, i)}/>
                                        </td>
                                        <td>
                                            <input className="form-control" name="playerChips" value={x.playerChips} onChange={(e) => handlePlayerInputChange(e, i)}/>
                                        </td>
                                        <td>
                                            <div className="form-control">
                                                {x.playerProfit !== Number(0).toFixed(2) ? (x.playerProfit < 0 ? "-$" + Math.abs(x.playerProfit) : "$" + x.playerProfit) : "-"}
                                            </div>
                                        </td>
                                        <td>
                                            <button className="form-control" onClick={(e) => handlePlayerRemoveClick(i, e)}>Remove</button>
                                        </td>
                                    </tr>
                                );
                            })}
                            <tr>
                                <td>
                                    <button className="form-control" onClick={(e) => handlePlayerAddClick(e)}>Add player</button>
                                </td>
                                <td></td>
                                <td></td>
                                <td>
                                    <div className="form-control">
                                        {playerList.length === 0 ? "-" : (netProfit !== Number(0).toFixed(2) ? (netProfit < 0 ? "-$" + Math.abs(netProfit) : ("$" + netProfit)) : "-")}
                                    </div>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
                
                <div className="form-group" style={{padding: "1%"}}>
                    <input type="submit" className="btn btn-primary" value="Save"/>
                </div>
                

                
            </form>
        </div>
    );
}

export default CreateSession;