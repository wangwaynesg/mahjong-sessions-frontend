import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getSessions } from "./actions/sessions";
import { getLikes } from "./actions/likes";
import { getPlayers } from "./actions/players";

import NavigationBar from "./components/NavigationBar";
import SessionList from "./components/SessionList";
import CreateSession from "./components/CreateSession";
import About from "./components/About";
import ViewSession from "./components/ViewSession";
import PlayerList from "./components/PlayerList";
import ViewPlayer from "./components/ViewPlayer";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSessions());
        dispatch(getPlayers());
        dispatch(getLikes());
    }, [dispatch]);

    return (
        <Router>
            <NavigationBar />

            <Route path="/" exact component={SessionList} />
            <Route path="/players" component={PlayerList} />
            <Route path="/create" component={CreateSession} />
            <Route path="/about" component={About} />
            <Route path="/sessions/:id" component={ViewSession}/>
            <Route path="/players/:id" component={ViewPlayer} />
        </Router>
    );
}

export default App;