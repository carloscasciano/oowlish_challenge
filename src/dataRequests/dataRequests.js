const axios = require("axios");
const serverURL = 'http://localhost:3001/'

export async function getUsers() {
    let users = [];
    await axios
      .get(`${serverURL}users/`)
      .then(function (response) {
        users = response.data;
      })
      .catch(function (error) {
        console.log(error);
      })
    return users;
  }