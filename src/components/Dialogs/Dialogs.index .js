import React from 'react';
import orderBy from 'lodash/orderBy';
import { Icon, Input } from 'antd';

import { DialogItem } from '..';

import '../Dialogs/Dialogs.scss';


const Dialogs = ({ items, userId, onSearch, inputValue }) => (

    <div className="dialogs__sidebar">
        <div className="dialogs__sidebar-header">
            <Icon type="menu" />
            <div className="dialogs__sidebar-header-search">
                <Input
                    placeholder="Search"
                    onChange={e => onSearch(e.target.value)}
                    value={inputValue}
                />
            </div>
        </div>

        <div className="dialogs">
            {orderBy(items, ["created_at"], ["desc"]).map(item => (
                <DialogItem
                    key={item._id}
                    isMe={item.user._id === userId}
                    {...item}
                />
            ))}
        </div>
    </div>
);


export default Dialogs;