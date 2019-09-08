import React from 'react';
import classNames from 'classnames';
import format from 'date-fns/format';
import isToday from 'date-fns/is_today';

import { ReadChekedIcon, AvatarGenerate } from '../';


const getMessageTime = created_at => {
    if (isToday(created_at)) {
        return format(created_at, "HH:mm");
    } else {
        return format(created_at, "DD.MM.YYYY");
    }
}

const DialogItem = ({ _id, user, unreaded, isMe, created_at, text, onSelect, currentDialogId }) => {
    return (
        <div
            className={classNames("dialogs__item", {
                "dialogs__item--online": user.isOnline,
                "dialogs__item--selected": currentDialogId === _id
            })}
            onClick={onSelect.bind(this, _id)}
        >
            <div className="dialogs__item-avatar">
                <AvatarGenerate user={user} />
            </div>
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <b>{user.fullname}</b>
                    <time>
                        {getMessageTime(created_at)}
                    </time>
                </div>
                <div className="dialogs__item-info-bottom">
                    <p>{text}</p>
                    {isMe && <ReadChekedIcon isMe={true} isReaded={true} />}
                    {unreaded > 0 && (
                        <div className="dialogs__item-info-bottom-count">{unreaded > 9 ? "+9" : unreaded}</div>
                    )}
                </div>
            </div>
        </div>
    );
}


export default DialogItem;