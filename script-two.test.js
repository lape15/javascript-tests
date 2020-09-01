const fetch = require("node-fetch");
const swapi = require("./script-two");

it("it calls swapi", () => {
  swapi.getPeople(fetch).then((data) => {
    expect(data.categories).toEqual([]);
  });
});
