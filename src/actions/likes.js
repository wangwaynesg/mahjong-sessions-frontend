import * as api from "../api";

export const getLikes = () => async (dispatch) => {
    try {
        const { data } = await api.fetchLikes();
        
        dispatch({ type: "FETCH", payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateLikes = (likes) => async (dispatch) => {
    try {
        const { data } = await api.updateLikes(likes);
        
        dispatch({ type: "UPDATE", payload: data});
    } catch (error) {
        console.log(error.message);
    }
}