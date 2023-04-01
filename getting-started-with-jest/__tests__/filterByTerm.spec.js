/* Our first friend is describe, a Jest method for containing one or more related tests. Every time you start writing a new suite of tests for a functionality wrap it in a describe block. As you can see it takes two arguments: a string for describing the test suite, and a callback function for wrapping the actual test. */
// esting is a matter of inputs, functions, and expected outputs

const filterByTerm = require("../src/filterByTerm");

describe("Filter function", () => {
  test("it should filter by a search term (link)", () => {
    // actual test
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" }
    ];

    const output = [{ id: 3, url: "https://www.link3.dev" }];

    expect(filterByTerm(input, "link")).toEqual(output);

    expect(filterByTerm(input, "LINK")).toEqual(output);
  });

  test("it should filter by a search term (uRl)", () => {
    // actual test
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" }
    ];

    const output = [{ id: 1, url: "https://www.url1.dev" }, { id: 2, url: "https://www.url2.dev" },];

    expect(filterByTerm(input, "uRl")).toEqual(output);

  });

  test("it should throw when searchTerm is empty string", () => {
    // solution ex 2
    const input = [];
    expect(() => {
      filterByTerm(input, "");
    }).toThrowError(Error("searchTerm cannot be empty"));
  });

});


