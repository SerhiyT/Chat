import React from 'react';
import classNames from 'classnames';
import { /*Time,*/ ReadChekedIcon } from '../../components';

import '../DialogItem/DialogItem.scss';

const getAvatar = (avatar) => {
    if (avatar) {
        return (
            <img src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-1/c0.1.160.160a/p160x160/65880009_2343537199033014_3578762992377921536_n.jpg?_nc_cat=100&_nc_oc=AQnoCz5V3pWZ2327C3zIfdUFmgS9LJU44P4cFxnoEkw1f0Gfbmn3e-qmtWoRN6_OePg&_nc_ht=scontent-waw1-1.xx&oh=5b9521f558a8b8833c02ebf8bb8c4004&oe=5DDEBE47"
                alt="" />
        );
    } else {
        //make Avatar
    }
}

const DialogItem = ({ user, message, date, unreaded }) => {
    return (
        <div className={classNames("dialogs__item", { "dialogs__item--online": user.isOnline })}>
            <div className="dialogs__item-avatar">
                {/*<img src={userInfo.avatar} alt={`${user.fullname} avatar`} />*/}
                {getAvatar(
                    "https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-1/c0.1.160.160a/p160x160/65880009_2343537199033014_3578762992377921536_n.jpg?_nc_cat=100&_nc_oc=AQnoCz5V3pWZ2327C3zIfdUFmgS9LJU44P4cFxnoEkw1f0Gfbmn3e-qmtWoRN6_OePg&_nc_ht=scontent-waw1-1.xx&oh=5b9521f558a8b8833c02ebf8bb8c4004&oe=5DDEBE47"
                )}
            </div>
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <b>{user.fullname}</b>
                    <time>
                        {/*<Time date={new Date()} />*/}
                        4:40 PM
                    </time>
                </div>
                <div className="dialogs__item-info-bottom">
                    <p>Text messaging, or texting, is the act of composing and sending electronic</p>
                    <ReadChekedIcon isMe={true} isReaded={true} />
                    {unreaded > 0 && (
                        <div className="dialogs__item-info-bottom-count">{unreaded > 9 ? "+9" : unreaded}</div>
                    )}
                </div>
            </div>
        </div>
    );
}


export default DialogItem;