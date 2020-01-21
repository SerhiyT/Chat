import React from 'react';
import classNames from 'classnames';
import format from 'date-fns/format';
import isToday from 'date-fns/is_today';

import { ReadChekedIcon, AvatarGenerate } from '..';


const getMessageTime = created_at => {
    if (isToday(created_at)) {
        return format(created_at, "HH:mm");
    } else {
        return format(created_at, "DD.MM.YYYY");
    }
}

const DialogItem = ({
    _id,
    isMe,
    onSelect,
    currentDialogId,
    lastMessage
}) => {
    return (
        <div
            className={classNames("dialogs__item", {
                "dialogs__item--online": lastMessage.user.isOnline,
                "dialogs__item--selected": currentDialogId === _id
            })}
            onClick={onSelect.bind(this, _id)}
        >
            <div className="dialogs__item-avatar">
                <AvatarGenerate user={lastMessage.user} />
            </div>
            <div className="dialogs__item-info">
                <div className="dialogs__item-info-top">
                    <b>{lastMessage.user.fullname}</b>
                    <time>
                        {getMessageTime(lastMessage.createdAt)}
                    </time>
                </div>
                <div className="dialogs__item-info-bottom">
                    <p>{lastMessage.text}</p>
                    {isMe && <ReadChekedIcon isMe={true} isReaded={true} />}
                    {lastMessage.unreaded > 0 && (
                        <div className="dialogs__item-info-bottom-count">
                            {lastMessage.unreaded > 9 ? "+9" : lastMessage.unreaded}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}


export default DialogItem;