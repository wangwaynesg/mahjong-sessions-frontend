const reducer = (likes = [], action) => {
    switch (action.type) {
        case "FETCH":
            return action.payload;
        case "UPDATE":
            return action.payload;
        default:
            return likes;
    }
}

export default reducer;