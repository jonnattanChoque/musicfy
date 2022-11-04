import React, {useState} from 'react'
import { Icon, Progress } from 'semantic-ui-react'
import './Player.scss'
import { usePlayer } from "../../../hooks";
import ReactPlayer from "react-player"

export function Player() {
    const {song, playing, pause, resume, volumen} = usePlayer();
    const [totalSeconds, setTotalSeconds] = useState(0);
    const [currentSeconds, setCurrentSeconds] = useState(0)

    const onProgressSong = (data) => {
        console.log(data);
        setTotalSeconds(data.loadedSeconds);
        setCurrentSeconds(data.playedSeconds);
    }
    
    return (
        <div className='player'>
            <Icon name={playing ? 'pause circle outline' : 'play circle outline'} 
            onClick={playing ? pause: resume}/>
            <Progress progress="value" value={currentSeconds} total={totalSeconds} size="tiny" />
            <ReactPlayer url={song?.file} playing={playing} width={0} height={0} volume={volumen} onProgress={onProgressSong} />
        </div>
    )
}