import React, { createContext, useState } from 'react'

export const PlayerContext = createContext({});

export function PlayerProvider(props) {
    const { children } = props;
    const [song, setSong] = useState(null);
    const [miniature, setMiniature] = useState(null);
    const [playing, setPlaying] = useState(false);
    const [volumen, setVolumen] = useState(0.5)

    const playSong = (song, miniature) => {
        setSong(song)
        setMiniature(miniature);
        setPlaying(true);
    }

    const pause = () => setPlaying(false);
    const resume = () => setPlaying(true);

    const data = {
        playSong,
        pause,
        resume,
        setVolumen,

        song,
        miniature,
        playing,
        volumen
    }

    return (
        <PlayerContext.Provider value={data}>{children}</PlayerContext.Provider>
    );
}