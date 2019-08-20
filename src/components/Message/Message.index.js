import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Time, ReadChekedIcon, /*AvatarGenerate*/ } from '../../components';
import { convertCurrentTime } from '../../utils/helpers'

import waveSvg from '../../assets/icons/wave.svg'
import playSvg from '../../assets/icons/play.svg'
import pauseSvg from '../../assets/icons/pause.svg'

import '../Message/Message.scss';


const AudioMessage = ({ audioSrc }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const audioElem = useRef(null);

    const togglePlay = () => {
        audioElem.current.volume = "0.1"
        if (!isPlaying) {
            audioElem.current.play();
        } else {
            audioElem.current.pause();
        }
    }

    useEffect(() => {

        audioElem.current.addEventListener(
            'playing',
            () => {
                setIsPlaying(true)

            },
            false
        );
        audioElem.current.addEventListener(
            'ended',
            () => {
                setIsPlaying(false)
                setProgress(0)
                setCurrentTime(0)
            },
            false
        );
        audioElem.current.addEventListener(
            'pause',
            () => {
                setIsPlaying(false)
            },
            false
        );
        audioElem.current.addEventListener("timeupdate", () => {
            const duration = (audioElem.current && audioElem.current.duration) || 0;
            setCurrentTime(audioElem.current.currentTime);
            setProgress(((audioElem.current.currentTime / duration) * 100) + (duration * 0.6));
        })
    });
    return (
        <div className="message__audio">
            <audio ref={audioElem} src={audioSrc} preload="auto" />
            <div className="message__audio-progress" style={{ width: progress + "%" }} />
            <div className="message__audio-info">
                <div className="message__audio-btn">
                    <button onClick={togglePlay}>
                        {isPlaying ? (
                            <img src={pauseSvg} alt="Pause" />
                        ) : (
                                <img src={playSvg} alt="Play" />
                            )}
                    </button>
                </div>
                <div className="message__audio-svg">
                    <img src={waveSvg} alt="Wave svg" />
                </div>
                <span className="message__audio-duration"> {convertCurrentTime(currentTime)}</span>
            </div>
        </div>
    )
}


const Message = ({ avatar, user, text, date, isMe, isReaded, isTyping, attachments, audio }) => {

    return (
        <div className={classNames("message", {
            "message--isme": isMe,
            "message--is-typing": isTyping,
            "message--is-audio": audio,
            "message--image": attachments,
        })}
        >
            <div className="message__content">
                <div className="message__avatar">
                    <img src={avatar} alt={`Avatar ${user.fullname}`} />
                </div>
                <div className="message__info">
                    {(audio || text || isTyping) && (<div className="message__bubble">
                        {text && <p className="message__text">{text}</p>}
                        {isTyping && (<div class="message__typing">
                            <span />
                            <span />
                            <span />
                        </div>
                        )}
                        {audio && <AudioMessage audioSrc={audio} />}
                    </div>
                    )}
                    <div className="message__icon">
                        <ReadChekedIcon isMe={isMe} isReaded={isReaded} />
                    </div>
                    {attachments && <div className="message__attachments">
                        {attachments.map(item => (
                            <div className="message__attachments-item">
                                <img src={item.url} alt={item.filename} />
                            </div>
                        ))}
                    </div>
                    }
                    {date && <time className="message__date">
                        <Time date={date} />
                    </time>}
                </div>
            </div>
        </div>
    );
}

Message.defaultProps = {
    user: {}
}
Message.propTypes = {
    avatar: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    user: PropTypes.object,
    attachments: PropTypes.object,
    isMe: PropTypes.bool,
    isReaded: PropTypes.bool,
    isTyping: PropTypes.bool,
    audio: PropTypes.string
}

export default Message;
