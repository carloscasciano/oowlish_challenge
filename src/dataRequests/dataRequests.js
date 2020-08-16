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
  await axios.post(`${serverURL}users`, newUser).catch(function (error) {
    console.log(error);
  });
}

export async function getSingleUserData(userId) {
  let singleUserData = [];
  await axios
    .get(`${serverURL}users/${userId}`)
    .then(function (response) {
      singleUserData = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return singleUserData;
}

export async function getUserWorkData(userId) {
  let workData = [];
  await axios
    .get(`${serverURL}entries?userId=${userId}`)
    .then(function (response) {
      workData = response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
  return workData;
}
