const axios = require("axios");
const serverURL = "http://localhost:3001/";

export async function getUsers() {
  let users = [];
  await axios
    .get(`${serverURL}users/`)
    .then(function (response) {
      users = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return users;
}

export async function addUser(newUserName, newUserDesiredWorkHours) {
  let newUser = {
    userName: newUserName,
    userExpectedHoursPerDay: newUserDesiredWorkHours,
  };
  await axios
    .post("http://localhost:3001/users", newUser)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
