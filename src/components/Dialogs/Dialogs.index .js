import React from 'react';
import orderBy from 'lodash/orderBy';
import { Icon, Input, Empty } from 'antd';

import { DialogItem } from '..';

import '../Dialogs/Dialogs.scss';


const Dialogs = ({ items, userId, onSearch, inputValue, onSelectDialog }) => (

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
            {items.length
                ? (orderBy(items, ["created_at"], ["desc"]).map(item => (
                    <DialogItem
                        onSelect={onSelectDialog}
                        key={item._id}
                        isMe={item.user._id === userId}
                        {...item} />
                )))
                : (<Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="No messages found" />)
            }
        </div>
    </div>
);


export default Dialogs;