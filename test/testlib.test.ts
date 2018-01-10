/// <reference path="../node_modules/@types/jquery/index.d.ts" />
/// <reference path="../node_modules/@types/kendo-ui/index.d.ts" />
/// <reference path="../node_modules/@types/jest/index.d.ts" />

import { Logger, LoggerMode } from "../src/testlib";
import { CurrentTimeLabel } from "../src/JohnWindow";

/**
 * Logger test
 */
describe("Logger test", () => {
  
  it("Logger is instantiable", () => {
    expect(new Logger()).toBeInstanceOf(Logger)
  })

  it("givenLoggerModeAlert_whenWrite_thenShouldBeCalled", () => {
    var logger = new Logger(LoggerMode.Alert);
    logger.write('test');
  })

  it("givenLoggerModeConsole_whenWrite_thenShouldBeCalled", () => {
    var logger = new Logger(LoggerMode.Console);
    logger.write('test');
  })
})

describe("CurrentTimeLabel test", () => {
  
  it("CurrentTimeLabel is instantiable", () => {
    var element = document.createElement("test");
    expect(new CurrentTimeLabel(element,"test")).toBeInstanceOf(CurrentTimeLabel);
  })
  // given when then
  it("given_TimeLable_when_Created_thenShouldBeValid", () => {
    // Arrange
    var element = document.createElement("testElement");
    
    // Act
    var myGreeter = new CurrentTimeLabel(element, "john");
    
    // Assert
    expect(myGreeter.TimeLabel).toBe("john");
  })

  // it("givenLoggerModeConsole_whenWrite_thenShouldBeCalled", () => {
  //   var logger = new Logger(LoggerMode.Console);
  //   logger.write('test');
  // })
})