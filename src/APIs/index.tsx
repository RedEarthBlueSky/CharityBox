import axios from "axios"

const options = {
  method: 'GET',
  url: 'https://moviesdatabase.p.rapidapi.com/titles/',
  // params: {idsList: 'tt0001702,tt0001856,tt0001856'}, //  when we search titles by ID
  headers: {
    'X-RapidAPI-Key': '6069657196mshbc16f3f91731137p1997cdjsn13ca221610c6',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
  }
};

export const getRapidAPI = () => (
  axios.request(options).then(function (response) {
    console.log(JSON.stringify(response.data, null, 2))
  }).catch(function (error) {
    console.error(error);
  })
)
