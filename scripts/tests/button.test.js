/**
 * @jest-environment jsdom
 */

const buttonClick = require("../button");

beforeEach(() => {
    // This way you don't need to load the entire HTML to tet just this part as Jest will on load and test the HTML part we specify below. This is a Mock DOM paragraph
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8") // This open html file using utf-8 character set
    // There is no need to specify the path to the DOM as it is already in the root directory. By default Node run from root directory.
    document.open();
    document.write(fileContents);
    document.close();
});

describe("DOM tests", () => {
    test("Expects content to change", () => {
        buttonClick();
        expect(document.getElementById("par")
            .innerHTML).toEqual("You Clicked");
    });
    test("h1 should exist", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);
        //This test gets all of the h1 tags and stores them  in a special kind of array. If the h1 exists,  
        //then the length of the array will be 1. If two h1  tags existed the length would be two, and so on.
    })
});