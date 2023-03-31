import { USERS } from "./storiesOrgData"

export const POSTS = [
  {
    imageURL: 'https://rare-gallery.com/uploads/posts/910269-cyberpunk-Cyberpunk-2077-Panam-Palmer-video-game-characters.png',
    user: USERS[0].user,
    likes: 7870,
    caption: 'Happy to have my Warhorse back.',
    profile_picture: USERS[0].image,
    comments: [
      {
        user: 'freestatetank',
        comments: 'She\'s a buety, Panam.',
      },
      {
        user: 'brightsaul',
        comments: 'Drive to your Aldecado family!',
      },
      {
        user: 'V',
        comments: '...from now a REAL Wraith',
      },
    ]
  },
  {
    imageURL: 'https://static.wikia.nocookie.net/cyberpunk/images/9/91/We_Gotta_Live_Together.png/revision/latest/scale-to-width-down/1200?cb=20221105034402',
    user: USERS[0].user,
    likes: 10670,
    caption: 'Back where I belong.',
    profile_picture: USERS[0].image,
    comments: [
      {
        user: 'carsandlove',
        comments: 'About time!',
      },
      {
        user: 'freestatetank',
        comments: 'Happy to have you home.',
      },
      {
        user: 'brightsaul',
        comments: 'Much as...  you know.  Missed you.',
      },
      {
        user: 'V',
        comments: 'Awww can\'t wait to be there too',
      },
    ]
  },
]