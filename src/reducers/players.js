const reducer = (players = [], action) => {
    switch (action.type) {
        case "FETCH_ALL_PLAYERS":
            return action.payload;
        case "UPDATE_PLAYER":
            return players.map((player) => player._id === action.payload._id ? action.payload : player);
        default:
            return players;
    }
}

export default reducer;