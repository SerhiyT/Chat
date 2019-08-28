import React from 'react';
import { Icon } from 'antd';

import { Message, ChatInput } from '../../components';
import { Dialogs } from '../../containers';
import dialogsJSON from '../../Dialogs.json';

import '../Home/Home.scss';


const Home = () => (
    <section className="home">
        <div className="chat">
            <div className="chat__sidebar">
                <div className="chat__sidebar-dialogs">
                    <Dialogs userId={0} items={dialogsJSON} />
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
                    <Icon type="more" style={{ fontSize: '30px' }} />
                </div>
                <div className="chat__dialog-messages">
                    <Message avatar="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-1/c0.1.160.160a/p160x160/65880009_2343537199033014_3578762992377921536_n.jpg?_nc_cat=100&_nc_oc=AQnoCz5V3pWZ2327C3zIfdUFmgS9LJU44P4cFxnoEkw1f0Gfbmn3e-qmtWoRN6_OePg&_nc_ht=scontent-waw1-1.xx&oh=5b9521f558a8b8833c02ebf8bb8c4004&oe=5DDEBE47"
                        name="Serh"
                        date="Mon Aug 12 2019 15:23:02"
                        audio="https://notificationsounds.com/soundfiles/4f6ffe13a5d75b2d6a3923922b3922e5/file-sounds-938-pluck.mp3"
                    />
                    <Message avatar="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-1/c0.1.160.160a/p160x160/65880009_2343537199033014_3578762992377921536_n.jpg?_nc_cat=100&_nc_oc=AQnoCz5V3pWZ2327C3zIfdUFmgS9LJU44P4cFxnoEkw1f0Gfbmn3e-qmtWoRN6_OePg&_nc_ht=scontent-waw1-1.xx&oh=5b9521f558a8b8833c02ebf8bb8c4004&oe=5DDEBE47"
                        name="Serh"
                        text="Text messaging, or texting, is the act of composing and sending electronic"
                        date="Mon Aug 12 2019 15:23:02" />
                    <Message avatar="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-1/c0.0.160.160a/p160x160/996022_394140564047516_799882837_n.jpg?_nc_cat=102&_nc_oc=AQmti9-2-RGlIbc1pUZcPZDVD5mwtnbE29l1asnf1Tmzm06R1_B9C9DCuwPVdVEvYHU&_nc_ht=scontent-waw1-1.xx&oh=f5385b46db92a7e20e00e05fade5b4e2&oe=5DE62E0B"
                        name="Serh"
                        text="Text messaging, or texting, is the act of composing and sending electronic"
                        date="Mon Aug 12 2019 19:45:14"
                        isMe={true}
                        isReaded={true} />
                    <Message
                        avatar="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-1/c0.0.160.160a/p160x160/996022_394140564047516_799882837_n.jpg?_nc_cat=102&_nc_oc=AQmti9-2-RGlIbc1pUZcPZDVD5mwtnbE29l1asnf1Tmzm06R1_B9C9DCuwPVdVEvYHU&_nc_ht=scontent-waw1-1.xx&oh=f5385b46db92a7e20e00e05fade5b4e2&oe=5DE62E0B"
                        date="Sun Apr 21 2019 21:55:29"
                        attachments={[
                            {
                                filename: "image.jpg",
                                url: "https://source.unsplash.com/100x100/?random=1&nature,water"
                            }
                        ]}
                        isMe={true}
                    />
                    <Message avatar="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-1/c0.1.160.160a/p160x160/65880009_2343537199033014_3578762992377921536_n.jpg?_nc_cat=100&_nc_oc=AQnoCz5V3pWZ2327C3zIfdUFmgS9LJU44P4cFxnoEkw1f0Gfbmn3e-qmtWoRN6_OePg&_nc_ht=scontent-waw1-1.xx&oh=5b9521f558a8b8833c02ebf8bb8c4004&oe=5DDEBE47"
                        name="Serh"
                        isTyping={true} />
                    <Message avatar="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-1/c0.1.160.160a/p160x160/65880009_2343537199033014_3578762992377921536_n.jpg?_nc_cat=100&_nc_oc=AQnoCz5V3pWZ2327C3zIfdUFmgS9LJU44P4cFxnoEkw1f0Gfbmn3e-qmtWoRN6_OePg&_nc_ht=scontent-waw1-1.xx&oh=5b9521f558a8b8833c02ebf8bb8c4004&oe=5DDEBE47"
                        name="Serh"
                        text="Text messaging, or texting, is the act of composing and sending electronic"
                        date="Mon Aug 12 2019 15:23:02" />
                    <Message avatar="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-1/c0.1.160.160a/p160x160/65880009_2343537199033014_3578762992377921536_n.jpg?_nc_cat=100&_nc_oc=AQnoCz5V3pWZ2327C3zIfdUFmgS9LJU44P4cFxnoEkw1f0Gfbmn3e-qmtWoRN6_OePg&_nc_ht=scontent-waw1-1.xx&oh=5b9521f558a8b8833c02ebf8bb8c4004&oe=5DDEBE47"
                        name="Serh"
                        text="Text messaging, or texting, is the act of composing and sending electronic"
                        date="Mon Aug 12 2019 15:23:02" />
                    <Message avatar="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-1/c0.1.160.160a/p160x160/65880009_2343537199033014_3578762992377921536_n.jpg?_nc_cat=100&_nc_oc=AQnoCz5V3pWZ2327C3zIfdUFmgS9LJU44P4cFxnoEkw1f0Gfbmn3e-qmtWoRN6_OePg&_nc_ht=scontent-waw1-1.xx&oh=5b9521f558a8b8833c02ebf8bb8c4004&oe=5DDEBE47"
                        name="Serh"
                        text="Text messaging, or texting, is the act of composing and sending electronic"
                        date="Mon Aug 12 2019 15:23:02" />
                    <Message avatar="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-1/c0.1.160.160a/p160x160/65880009_2343537199033014_3578762992377921536_n.jpg?_nc_cat=100&_nc_oc=AQnoCz5V3pWZ2327C3zIfdUFmgS9LJU44P4cFxnoEkw1f0Gfbmn3e-qmtWoRN6_OePg&_nc_ht=scontent-waw1-1.xx&oh=5b9521f558a8b8833c02ebf8bb8c4004&oe=5DDEBE47"
                        name="Serh"
                        text="Text messaging, or texting, is the act of composing and sending electronic"
                        date="Mon Aug 12 2019 15:23:02" />
                    <Message avatar="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-1/c0.1.160.160a/p160x160/65880009_2343537199033014_3578762992377921536_n.jpg?_nc_cat=100&_nc_oc=AQnoCz5V3pWZ2327C3zIfdUFmgS9LJU44P4cFxnoEkw1f0Gfbmn3e-qmtWoRN6_OePg&_nc_ht=scontent-waw1-1.xx&oh=5b9521f558a8b8833c02ebf8bb8c4004&oe=5DDEBE47"
                        name="Serh"
                        text="Text messaging, or texting, is the act of composing and sending electronic"
                        date="Mon Aug 12 2019 15:23:02" />
                    <Message avatar="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-1/c0.1.160.160a/p160x160/65880009_2343537199033014_3578762992377921536_n.jpg?_nc_cat=100&_nc_oc=AQnoCz5V3pWZ2327C3zIfdUFmgS9LJU44P4cFxnoEkw1f0Gfbmn3e-qmtWoRN6_OePg&_nc_ht=scontent-waw1-1.xx&oh=5b9521f558a8b8833c02ebf8bb8c4004&oe=5DDEBE47"
                        name="Serh"
                        text="Text messaging, or texting, is the act of composing and sending electronic"
                        date="Mon Aug 12 2019 15:23:02" />
                    <Message avatar="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-1/c0.1.160.160a/p160x160/65880009_2343537199033014_3578762992377921536_n.jpg?_nc_cat=100&_nc_oc=AQnoCz5V3pWZ2327C3zIfdUFmgS9LJU44P4cFxnoEkw1f0Gfbmn3e-qmtWoRN6_OePg&_nc_ht=scontent-waw1-1.xx&oh=5b9521f558a8b8833c02ebf8bb8c4004&oe=5DDEBE47"
                        name="Serh"
                        text="Text messaging, or texting, is the act of composing and sending electronic"
                        date="Mon Aug 12 2019 15:23:02" />
                </div>
                <div className="chat__dialog-input">
                    <ChatInput />
                </div>
            </div>
        </div>
    </section>
)


export default Home;



