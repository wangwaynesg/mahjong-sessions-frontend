import axios from "axios";

export const players_url = "http://localhost:5000/players/";
export const sessions_url = "http://localhost:5000/sessions/";
export const likes_url = "http://localhost:5000/likes/61fe4fa2f3b535b40f22ff6c";

export const fetchSessions = () => axios.get(sessions_url);
export const createSession = (newSession) => axios.post(sessions_url, newSession);

export const fetchLikes = () => axios.get(likes_url);
export const updateLikes = (newLikes) => axios.put(likes_url, newLikes);

export const createPlayer = (newPlayer) => axios.post(players_url, newPlayer);
export const updatePlayer = (player) => axios.put(players_url, player);
export const fetchPlayers = () => axios.get(players_url);
