const googleSearch = require("./script");

dbMock = ["dog.com", "cheese.com", "disney.com", "dogpictures.com"];

describe("googlesearch tests", () => {
  it("this is a test", () => {
    expect("hello").toBe("hello");
  });

  it("it is searching google", () => {
    expect(googleSearch("dog", dbMock)).toEqual(["dog.com", "dogpictures.com"]);
  });

  it("does not return more than 3 matches", () => {
    expect(googleSearch(".com", dbMock).length).toEqual(3);
  });
});
