/// <reference path="../node_modules/@types/jest/index.d.ts" />

import { CurrentTimeLabel } from "../src/CurrentTimeLabel";

/**
 * Logger test
 */
describe("CurrentTimeLabel test", () => {
  
  it("CurrentTimeLabel is instantiable", () => {
    var element = document.createElement("test");
    expect(new CurrentTimeLabel(element)).toBeInstanceOf(CurrentTimeLabel);
  })
  // given when then
  it("given_TimeLable_when_Created_thenShouldBeDefined", () => {
    // Arrange
    var element = document.createElement("testElement");
    
    // Act
    var myGreeter = new CurrentTimeLabel(element);
    
    // Assert
    expect(myGreeter.TimeLabel).toBeDefined();
  })
})