import React from 'react';
import orderBy from 'lodash/orderBy';
import { Button, Input, Empty } from 'antd';

import { DialogItem } from '..';

import '../Dialogs/Dialogs.scss';


const Dialogs = ({ items, userId, onSearch, inputValue, onSelectDialog, currentDialogId }) => (

    <div className="dialogs__sidebar">
        <div className="dialogs__sidebar-header">
            <Button type="link" shape="circle" icon="menu" />
            <div className="dialogs__sidebar-header-search">
                <Input
                    placeholder="Search"
                    onChange={e => onSearch(e.target.value)}
                    value={inputValue}
                />
            </div>
        </div>

        <div className="dialogs">
            {items.length
                ? (orderBy(items, ["created_at"], ["desc"]).map(item => (
                    <DialogItem
                        onSelect={onSelectDialog}
                        key={item._id}
                        isMe={item.author._id === userId}
                        currentDialogId={currentDialogId}
                        {...item} />
                )))
                : (<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="No messages found" />)
            }
        </div>
    </div>
);


export default Dialogs;