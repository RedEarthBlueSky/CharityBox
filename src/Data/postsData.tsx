import { USERS } from "./storiesOrgData"

const scuba = require('../../assets/Scuba.jpeg')

export const POSTS = [
  {
    imageURL: 'https://static.wikia.nocookie.net/cyberpunk/images/e/e2/Thorton_Mackinaw_%22Warhorse%22_Database_CP2077.png/revision/latest?cb=20210127230108',
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
  {
    imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeiTxJ87WEtuF0L9aFyQOoUVTYSLTMhehTuQ&usqp=CAU',
    user: USERS[1].user,
    likes: 246097,
    caption: 'Once a land lubber',
    profile_picture: USERS[1].image,
    comments: [
      {
        user: 'V',
        comments: 'It\'s my inner child stops me.',
      },
      {
        user: 'MackingMaiko',
        comments: 'Quite the team!',
      },
      {
        user: 'Kerry',
        comments: 'He basically is a child hehe.',
      },
    ]
  },
  {
    imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO_b462Ys0fTfbVi_MiTYJXMJVTNcWu1Nix9adUshzWTguQcICjHcaZzbUdH-WzIU2N38&usqp=CAU',
    user: USERS[1].user,
    likes: 10670,
    caption: 'Feeling meh.',
    profile_picture: USERS[1].image,
    comments: [
      {
        user: 'Maiko',
        comments: 'You have everything to be happy about but...',
      },
      {
        user: 'freestatetank',
        comments: 'You know where you belong.',
      },
      {
        user: 'Panamam',
        comments: 'With us, gal.',
      },
      {
        user: 'V',
        comments: 'Awww can\'t wait to be there too',
      },
    ]
  },
]