import { combineReducers } from "redux";

import sessions from "./sessions";
import likes from "./likes";
import players from "./players";

export default combineReducers({
    sessions,
    likes,
    players
});