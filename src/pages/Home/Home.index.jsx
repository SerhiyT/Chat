import React from 'react';

import { Dialogs, Message } from '../../components'

import '../Home/Home.scss';


const Home = () => (
    <section className="home">
        <Dialogs
            userId={0}
            items={[
                {
                    _id: '494d7bc4786e549b652fc0faabf6c9ed',
                    text: 'Text messaging, or texting, is the act of composing and sending electronic',
                    created_at: "Sat Aug 17 2019 17:54:22",
                    user: {
                        _id: '494d7bc4786e549b652fc0faabf6c9ed',
                        fullname: 'Serhiy T',
                        avatar: 0
                    }
                },
                {
                    _id: '494d7bc4786e549b652fc0faabf6c9ed',
                    text: 'Hey man',
                    created_at: "Sat Aug 18 2019 8:53:22",
                    user: {
                        _id: '494d7bc4786e549b652fc0faabf6c9ed',
                        fullname: 'And P',
                        avatar: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-1/c0.0.160.160a/p160x160/996022_394140564047516_799882837_n.jpg?_nc_cat=102&_nc_oc=AQnGq7TLkqbKwd4y3J092_8HiHo1oZOJPfVg4tWsYzYOsNNTW-kPAWbfY-21P80wmrM&_nc_ht=scontent-waw1-1.xx&oh=7b69ddd973476c0a6f08a08957618283&oe=5DE62E0B'
                    }
                }
            ]}
        />
        <Message avatar="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-1/c0.1.160.160a/p160x160/65880009_2343537199033014_3578762992377921536_n.jpg?_nc_cat=100&_nc_oc=AQnoCz5V3pWZ2327C3zIfdUFmgS9LJU44P4cFxnoEkw1f0Gfbmn3e-qmtWoRN6_OePg&_nc_ht=scontent-waw1-1.xx&oh=5b9521f558a8b8833c02ebf8bb8c4004&oe=5DDEBE47"
            name="Serh"
            date="Mon Aug 12 2019 15:23:02"
            audio="https://notificationsounds.com/soundfiles/4f6ffe13a5d75b2d6a3923922b3922e5/file-sounds-938-pluck.mp3"
        />
        {/*           <Message avatar="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-1/c0.1.160.160a/p160x160/65880009_2343537199033014_3578762992377921536_n.jpg?_nc_cat=100&_nc_oc=AQnoCz5V3pWZ2327C3zIfdUFmgS9LJU44P4cFxnoEkw1f0Gfbmn3e-qmtWoRN6_OePg&_nc_ht=scontent-waw1-1.xx&oh=5b9521f558a8b8833c02ebf8bb8c4004&oe=5DDEBE47"
                name="Serh"
                text="Text messaging, or texting, is the act of composing and sending electronic"
                date="Mon Aug 12 2019 15:23:02" />
            <Message avatar="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-1/c0.0.160.160a/p160x160/996022_394140564047516_799882837_n.jpg?_nc_cat=102&_nc_oc=AQmti9-2-RGlIbc1pUZcPZDVD5mwtnbE29l1asnf1Tmzm06R1_B9C9DCuwPVdVEvYHU&_nc_ht=scontent-waw1-1.xx&oh=f5385b46db92a7e20e00e05fade5b4e2&oe=5DE62E0B"
                name="Serh"
                text="Text messaging, or texting, is the act of composing and sending electronic"
                date="Mon Aug 12 2019 19:45:14"
                isMe={true}
                isReaded={true} />
            <Message avatar="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-1/c0.0.160.160a/p160x160/996022_394140564047516_799882837_n.jpg?_nc_cat=102&_nc_oc=AQmti9-2-RGlIbc1pUZcPZDVD5mwtnbE29l1asnf1Tmzm06R1_B9C9DCuwPVdVEvYHU&_nc_ht=scontent-waw1-1.xx&oh=f5385b46db92a7e20e00e05fade5b4e2&oe=5DE62E0B"
                name="Serh"
                text="Text messaging, or texting, is the act of composing and sending electronic"
                date="Wed Aug 14 2019 13:16:00"
                isMe={true}
                isReaded={false} />
            <Message avatar="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-1/c0.1.160.160a/p160x160/65880009_2343537199033014_3578762992377921536_n.jpg?_nc_cat=100&_nc_oc=AQnoCz5V3pWZ2327C3zIfdUFmgS9LJU44P4cFxnoEkw1f0Gfbmn3e-qmtWoRN6_OePg&_nc_ht=scontent-waw1-1.xx&oh=5b9521f558a8b8833c02ebf8bb8c4004&oe=5DDEBE47"
                name="Serh"
                isTyping={true} />
            <Message
                avatar="https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-1/c0.0.160.160a/p160x160/996022_394140564047516_799882837_n.jpg?_nc_cat=102&_nc_oc=AQmti9-2-RGlIbc1pUZcPZDVD5mwtnbE29l1asnf1Tmzm06R1_B9C9DCuwPVdVEvYHU&_nc_ht=scontent-waw1-1.xx&oh=f5385b46db92a7e20e00e05fade5b4e2&oe=5DE62E0B"
                date="Sun Apr 21 2019 21:55:29"
                attachments={[
                    {
                        filename: "image.jpg",
                        url: "https://source.unsplash.com/100x100/?random=1&nature,water"
                    }
                ]}
            />
            </div> */}
    </section>
)

export default Home;

