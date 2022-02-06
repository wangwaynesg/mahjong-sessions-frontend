import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateLikes } from "../actions/likes";

const About = () => {
    const dispatch = useDispatch();

    const likes = useSelector((state) => state.likes);

    const addOneLike = () => {
        const tempLikes = likes;
        tempLikes.likes = likes.likes + 1;
        dispatch(updateLikes(tempLikes));
    }

    return (
        <div>
            <div className="lead" style={{ textAlign:"center"}}>
                <p>
                    Hey it's me, Wayne! <br/>
                    Thanks for checking out my web app!<br/>
                    This app was made to track poker sessions, tabulate your profits and losses easily!<br/>
                    Hit like if you enjoyed using it~ :D
                </p>
                <button onClick={addOneLike} className="btn btn-outline-secondary">Likes: { likes.likes }</button>
            </div>
        </div>
    );
}

export default About;