/**
 * @jest-environment jsdom
 */

const buttonClick = require("../button");

beforeEach(() => {
    // This way you don't need to load the entire HTML to tet just this part as Jest will on load and test the HTML part we specify below. This is a Mock DOM paragraph
    document.body.innerHTML = "<p id='par'></p>";
});

describe("DOM tests", () => {
    test("Expects content to change", () => {
        buttonClick();
        expect(document.getElementById("par")
            .innerHTML).toEqual("You Clicked");
    });
});