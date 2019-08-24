import React, { useState } from 'react';
import { Icon, Input } from 'antd';

import '../ChatInput/ChatInput.scss';


const ChatInput = (props) => {

    const [value, setValue] = useState('');

    return (
        <div className="chat-input">
            <div className="chat-input__smile-btn">
                <Icon type="smile" />
            </div>
            <Input
                onChange={e => setValue(e.target.value)}
                size="large"
                placeholder="Enter U message"
            />
            <div className="chat-input__actions">
                <Icon type="camera" />
                {value
                    ? <Icon type="arrow-right" />
                    : <Icon type="audio" />
                }
            </div>
        </div>
    );
}


export default ChatInput;