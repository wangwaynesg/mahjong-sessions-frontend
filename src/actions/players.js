import * as api from "../api";

export const getPlayers = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPlayers();
        
        dispatch({ type: "FETCH_ALL_PLAYERS", payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const createPlayer = (player) => async (dispatch) => {
    try {
        const { data } = await api.createPlayer(player);
        
        dispatch({ type: "CREATE", payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const updatePlayer = (player) => async (dispatch) => {
    try {
        const { data } = await api.updatePlayer(player);
        
        dispatch({ type: "UPDATE_PLAYER", payload: data});
    } catch (error) {
        console.log(error.message);
    }
}