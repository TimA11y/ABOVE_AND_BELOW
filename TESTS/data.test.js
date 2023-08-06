/** 
 * @jest-environment jsdom
 */
import { buildings } from "../data.mjs";

describe("Buildings object", function () {

  test("drawing a card from the deck and adding it to the tableau.", function () {

    document.innerHTML = "";
    buildings.draw("building0");
    expect(buildings.tableau.size).toBe(1);

  }); // end test.
}); // describe buildings.