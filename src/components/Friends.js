import React, {useState} from 'react'

export default function Friends() {
    const [users, setUsers] = useState([
        {
            firstName: 'Herminia',
            lastName: 'Watson',
            email: 'herminia.watson@example.com',
            age: 37,
            image: '',
            posts: [
                {
                    date: '24.09.2020',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 😂 Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
                },
                {
                    date: '11.10.2020',
                    description: 'Not to be confused with 😭 Loudly Crying Face or 🤣 Rolling on the Floor Laughing, which expresses more intense laughter.',
                }
            ]
        },
        {
            firstName: 'Arnold',
            lastName: 'Riley',
            email: 'arnold.riley@example.com',
            age: 48,
            image: '',
            posts: [
                {
                    date: '16.09.2020',
                    description: 'It is a long established fact that a reader will be 🍊 istracted 🍊 by the readable content of a page when looking at its layout. ',
                },
                {
                    date: '03.11.2020',
                    description: 'There are many variations of passages of Lorem Ipsum available, h ⭐ Star, 🌟 Glowing Star, and ✨ Sparkles, but the majority have suffered alteration in some form.',
                }
            ]
        },
    ])

    // axios.get('https://randomuser.me/api/')
    // .then(function (response) {
    // // handle success
    // console.log(response.data.results);
    // })
    // .catch(function (error) {
    // // handle error
    // console.log(error);
    // })
    return (
        <div>
            
        </div>
    )
}


