import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { UploadField } from '@navjobs/upload';

import '../ChatInput/ChatInput.scss';


const ChatInput = (props) => {

    const [value, setValue] = useState('');
    return (
        <div className="chat-input">
            <div className="chat-input__smile-btn">
                <Button type="link" shape="circle" icon="smile" />
            </div>
            <Input
                onChange={e => setValue(e.target.value)}
                size="large"
                placeholder="Enter U message"
            />
            <div className="chat-input__actions">
                <UploadField
                    onFiles={files => console.log(files)}
                    containerProps={{ className: 'chat-input__actions-upload-btn' }}
                    uploadProps={{
                        accept: '.jpg,.gif,.png,.jpeg,.bmp',
                        multiple: "multiple"
                    }}
                >
                    <Button type="link" shape="circle" icon="camera" />
                </UploadField>
                {value
                    ? <Button type="link" shape="circle" icon="arrow-right" />
                    : <Button type="link" shape="circle" icon="audio" />
                }
            </div>
        </div >
    );
}


export default ChatInput;