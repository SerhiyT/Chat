import React from 'react';
import { Button } from 'antd';

import { ChatInput } from '../../components';
import { Dialogs, Messages } from '../../containers';

import '../Home/Home.scss';


const Home = () => (
    <section className="home">
        <div className="chat">
            <div className="chat__sidebar">
                <div className="chat__sidebar-dialogs">
                    <Dialogs userId={0} />
                </div>
            </div>

            {/* =============================DIALOGS (MESSAGE)=======================*/}

            <div className="chat__dialog">
                <div className="chat__dialog-header">
                    <div />
                    <div className="chat__dialog-header-center">
                        <b className="chat__dialog-header-username">Tsyntsar Serhiy</b>
                        <div className="chat__dialog-header-status">
                            <div className="status status--online">online</div>
                        </div>
                    </div>
                    <Button type="link" shape="circle" icon="more" style={{ fontSize: '25px' }} />
                </div>
                <div className="chat__dialog-messages">
                    <Messages />
                </div>
                <div className="chat__dialog-input">
                    <ChatInput />
                </div>
            </div>
        </div>
    </section>
)


export default Home;



