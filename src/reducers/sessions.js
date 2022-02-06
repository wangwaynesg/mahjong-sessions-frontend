const reducer = (sessions = [], action) => {
    switch (action.type) {
        case "FETCH_ALL":
            return action.payload;
        case "CREATE":
            return [...sessions, action.payload];
        default:
            return sessions;
    }
}

export default reducer;