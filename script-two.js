const fetch = require("node-fetch");

const getPeoplePromise = (fetch) => {
  return fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((data) => {
      return {
        count: data,
      };
    })
    .catch((err) => console.log(err));
};

const getPeople = async (fetch) => {
  const getRequest = await fetch("https://api.chucknorris.io/jokes/random");
  const data = await getRequest.json();

  return data;
};

module.exports = {
  getPeoplePromise,
  getPeople,
};
