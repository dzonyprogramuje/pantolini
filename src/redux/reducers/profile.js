const date = {
  firstName: "Dzony",
  lastName: "Prograjmuje",
  email: 'herminia.watson@example.com',
  age: 66,
  city: 'Warsaw',
  postsQuantity: 11,
  joined: "14.02.2021",
  avatar: "avatar.jpg",
  posts: [
    {
        id: 0,
        date: '24.09.2020',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. 😂 Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        hated: 1,
        liked: 13,
        comments: [
          {
              author: 'Arnold Riley',
              comment: 'Perspectivism surrealism modern art synchromism modern art new objectivity, kinetic art aestheticism installation art stuckism international carolingian,',
              image: '2.jpg',
          },
          {
              author: 'Arnold Riley',
              comment: 'Haha ! ',
              image: '2.jpg',
          },
        ],
      },
      {
        id: 1,
        date: '11.10.2020',
        description: 'Not to be confused with 😭 Loudly Crying Face or 🤣 Rolling on the Floor Laughing, which expresses more intense laughter.',
        hated: 0,
        liked: 23,
        comments: [
            {
                author: 'Arnold Riley',
                comment: 'Post-structuralism gothic art illusionism synchromism surrealism caravaggisti jugendstil precisionism cubo-futurism...',
                image: '2.jpg',
            },
        ],
      }
    ]
}

export default function profile(state = date, action) {
  switch (action.type) {
    default:
      return state
  }
}